'use client';
import { useEffect, useRef, useState } from 'react';

const BOBAnsagen = ({ conditionString, IBNR, audiourl }) => {
  const germanAudioRef = useRef(null);
  const englishAudioRef = useRef(null);
  const germanGoodbyeRef = useRef(null);
  const englishGoodbyeRef = useRef(null);
  const [playedState, setPlayedState] = useState({ condition: '', ibnr: '' });

  useEffect(() => {
    if (!IBNR) return;

    const germanAudio = germanAudioRef.current;
    const englishAudio = englishAudioRef.current;

    if (germanAudio) {
      germanAudio.src = `https://${audiourl}/de/${IBNR}.wav`;
    }
    if (englishAudio) {
      englishAudio.src = `https://${audiourl}/en/${IBNR}.wav`;
    }
  }, [IBNR, audiourl]);

  const playAudio = async () => {
    const germanAudio = germanAudioRef.current;
    const englishAudio = englishAudioRef.current;
    const germanGoodbye = germanGoodbyeRef.current;
    const englishGoodbye = englishGoodbyeRef.current;

    if (conditionString === 'In Kürze erreichen wir') {
      if (germanAudio) {
        await germanAudio.play();
        await new Promise(resolve => {
          germanAudio.onended = resolve;
        });
      }
      if (englishAudio) {
        await englishAudio.play();
      }
    } else if (conditionString === undefined) {
      if (germanAudio) {
        await germanAudio.play();
        await new Promise(resolve => {
          germanAudio.onended = resolve;
        });
      }
      if (germanGoodbye) {
        germanGoodbye.src = `https://${audiourl}/de/goodbye-message.wav`;
        await germanGoodbye.play();
        await new Promise(resolve => {
          germanGoodbye.onended = resolve;
        });
      }
      if (englishAudio) {
          englishAudio.play();
          await new Promise(resolve =>{
            englishAudio.onended = resolve;
          })
      }
      if (englishGoodbye) {
        englishGoodbye.src = `https://${audiourl}/en/goodbye-message.wav`;
        await englishGoodbye.play();
      }
    }
  };

  useEffect(() => {
    const checkAudioPlay = () => {
      if (
        (conditionString !== playedState.condition || IBNR !== playedState.ibnr)
        && (conditionString === 'In Kürze erreichen wir' || conditionString === undefined)
      ) {
        playAudio();
        setPlayedState({ condition: conditionString, ibnr: IBNR });
      }
    };

    const interval = setInterval(checkAudioPlay, 5000);

    return () => clearInterval(interval);
  }, [conditionString, IBNR, playedState]); // Trigger on changes

  return (
    <div className='__ansagen' style={{ display: 'none' }}>
      <audio ref={germanAudioRef} controls />
      <audio ref={englishAudioRef} controls />
      <audio ref={germanGoodbyeRef} controls />
      <audio ref={englishGoodbyeRef} controls />
    </div>
  );
};

export default BOBAnsagen;
