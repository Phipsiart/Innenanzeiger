'use client';
import { useEffect, useRef } from 'react';

const BOBAnsagen = ({ conditionString, IBNR, audiourl }) => {
  const audioRef = useRef(null);
  console.log(IBNR, conditionString);

  useEffect(() => {
    if (!IBNR) return;

    const audio = audioRef.current;

    if (audio) {
      audio.src = `https://${audiourl}${IBNR}.wav`;
    }
  }, [IBNR]); 

  useEffect(() => {
    const audio = audioRef.current;

    if (conditionString === 'In Kürze erreichen wir' && audio) {
      audio.play().catch((error) => {
        console.error('Audio konnte nicht automatisch abgespielt werden:', error);
      });
    }
  }, [conditionString, IBNR]); 

  return (
    <div className='__ansagen' style={{ display: 'none' }}>
      <audio ref={audioRef} controls>
        <source src={`https://${audiourl}${IBNR}.wav`} type="audio/wav" />
      </audio>
    </div>
  );
};

export default BOBAnsagen;
