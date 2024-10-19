// app/api/announcement/route.js
import { createReadStream } from 'fs';
import fetch from 'node-fetch';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const IBNR = searchParams.get('IBNR');
  const language = searchParams.get('language');

  // Validate input
  if (!IBNR || !language) {
    return new Response(JSON.stringify({ error: 'Missing IBNR or language' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const audioUrl = `https://${process.env.AUDIO_URL}/${language}/${IBNR}.wav`;

  // Fetch the audio file
  const response = await fetch(audioUrl);
  
  // Check if the audio file exists
  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Audio file not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Set headers for the audio response
  const headers = new Headers({
    'Content-Type': 'audio/wav',
    'Content-Disposition': 'inline; filename="audio.wav"',
  });

  // Create a ReadableStream to handle audio streaming with silence
  const { readable, writable } = new TransformStream();

  const writer = writable.getWriter();

  // Write silence before the audio stream starts
  writer.write(new Uint8Array(new Array(44100 * 2 * 0.3).fill(0))); // 0.3 seconds of silence for 16-bit audio (44100 Hz)
  
  // Pipe the response body to the writer
  response.body.pipeTo(writer);

  // Close the writer when the audio stream ends
  response.body.on('end', () => {
    writer.close();
  });

  return new Response(readable, {
    headers,
  });
}
