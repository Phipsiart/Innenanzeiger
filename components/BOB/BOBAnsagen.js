'use client';
import { useEffect, useRef } from 'react';

const BOBAnsagen = ({ conditionString, IBNR, audiourl }) => {
  const germanAudioRef = useRef(null);
  const germanGoodbyeRef = useRef(null);
  const englishAudioRef = useRef(null);
  const englishGoodbyeRef = useRef(null);

  useEffect(() => {
    if (!IBNR) return;
    const germanAudio = germanAudioRef.current;
    const germanGoodbye = germanGoodbyeRef.current;
    const englishAudio = englishAudioRef.current;
    const englishGoodbye = englishGoodbyeRef.current;

    if (germanAudio) {
      germanAudio.src = `https://${audiourl}/de/${IBNR}.wav`;
    }
    if (germanGoodbye) {
      germanGoodbye.src = `https://${audiourl}/de/goodbye-message.wav`;
    }
    if (englishAudio) {
      englishAudio.src = `https://${audiourl}/en/${IBNR}.wav`;
    }
    if (englishGoodbye) {
      englishGoodbye.src = `https://${audiourl}/en/goodbye-message.wav`;
    }
  }, [IBNR, audiourl]);

  useEffect(() => {
    const germanAudio = germanAudioRef.current;
    const germanGoodbye = germanGoodbyeRef.current;
    const englishAudio = englishAudioRef.current;
    const englishGoodbye = englishGoodbyeRef.current;

    if (conditionString === undefined && germanAudio) {
      germanAudio
        .play()
        .then(() => {
          germanAudio.onended = () => {
            if (germanGoodbye) {
              germanGoodbye
                .play()
                .then(() => {
                  germanGoodbye.onended = () => {
                    if (englishAudio) {
                      englishAudio
                        .play()
                        .then(() => {
                          englishAudio.onended = () => {
                            if (englishGoodbye) {
                              englishGoodbye.play().catch((error) => {
                                console.error(
                                  'Englische goodbye-message konnt ned automatisch abgespuid werdn:',
                                  error
                                );
                              });
                            }
                          };
                        })
                        .catch((error) => {
                          console.error('Englische IBNR-Audiodatei konnt ned automatisch abgespuid werdn:', error);
                        });
                    }
                  };
                })
                .catch((error) => {
                  console.error('Deitsche goodbye-message konnt ned automatisch abgespuid werdn:', error);
                });
            }
          };
        })
        .catch((error) => {
          console.error('Deitsche IBNR-Audiodatei konnt ned automatisch abgespuid werdn:', error);
        });
    }
  }, [conditionString, IBNR, audiourl]);

  return (
    <div className="__ansagen" style={{ display: 'none' }}>
      <audio ref={germanAudioRef} controls>
        <source src={`https://${audiourl}/de/${IBNR}.wav`} type="audio/wav" />
      </audio>
      <audio ref={germanGoodbyeRef} controls>
        <source src={`https://${audiourl}/de/goodbye-message.wav`} type="audio/wav" />
      </audio>
      <audio ref={englishAudioRef} controls>
        <source src={`https://${audiourl}/en/${IBNR}.wav`} type="audio/wav" />
      </audio>
      <audio ref={englishGoodbyeRef} controls>
        <source src={`https://${audiourl}/en/goodbye-message.wav`} type="audio/wav" />
      </audio>
    </div>
  );
};

export default BOBAnsagen;
