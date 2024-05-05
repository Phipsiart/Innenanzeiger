import GetConnections from '@/lib/getconnections';
import { NextResponse } from 'next/server';
export async function GET(request) {
  const from = request.nextUrl.searchParams.get('from') || 'Berlin Hbf';
  const to = request.nextUrl.searchParams.get('to') || 'München Hbf';
  const departure = request.nextUrl.searchParams.get('departure') || '2024-05-05T19:06:30.620Z';
  const data = await GetConnections(from, to, departure);
  try {
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occoured.' }, { status: 500 });
  }
}
