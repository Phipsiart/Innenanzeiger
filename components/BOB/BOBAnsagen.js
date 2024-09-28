'use client';
import { useEffect, useRef, useState } from 'react';

const BOBAnsagen = ({ conditionString, IBNR, audiourl }) => {
  const germanAudioRef = useRef(null);
  const englishAudioRef = useRef(null);
  const germanGoodbyeRef = useRef(null);
  const englishGoodbyeRef = useRef(null);
  const [playedOnce, setPlayedOnce] = useState(false);

  console.log(IBNR, conditionString);

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

  useEffect(() => {
    const germanAudio = germanAudioRef.current;
    const englishAudio = englishAudioRef.current;

    if (playedOnce) return;

    if (conditionString === 'In Kürze erreichen wir') {
      if (germanAudio) {
        germanAudio.play().then(() => {
          germanAudio.onended = () => {
            if (englishAudio) {
              englishAudio.play().catch((error) => {
                console.error('Englische IBNR-Audiodatei konnte nicht automatisch abgespielt werden:', error);
              });
            }
          };
        }).catch((error) => {
          console.error('Deutsche IBNR-Audiodatei konnte nicht automatisch abgespielt werden:', error);
        });
      }
    } else if (conditionString === undefined) {
      if (germanAudio) {
        germanAudio.play().then(() => {
          germanAudio.onended = () => {
            const germanGoodbye = germanGoodbyeRef.current;
            if (germanGoodbye) {
              germanGoodbye.src = `https://${audiourl}/de/goodbye-message.wav`;
              germanGoodbye.play().then(() => {
                germanGoodbye.onended = () => {
                  if (englishAudio) {
                    englishAudio.play().then(() => {
                      englishAudio.onended = () => {
                        const englishGoodbye = englishGoodbyeRef.current;
                        if (englishGoodbye) {
                          englishGoodbye.src = `https://${audiourl}/en/goodbye-message.wav`;
                          englishGoodbye.play().catch((error) => {
                            console.error('Englische goodbye-message konnte nicht automatisch abgespielt werden:', error);
                          });
                        }
                      };
                    }).catch((error) => {
                      console.error('Englische IBNR-Audiodatei konnte nicht automatisch abgespielt werden:', error);
                    });
                  }
                };
              }).catch((error) => {
                console.error('Deutsche goodbye-message konnte nicht automatisch abgespielt werden:', error);
              });
            }
          };
        }).catch((error) => {
          console.error('Deutsche IBNR-Audiodatei konnte nicht automatisch abgespielt werden:', error);
        });
      }
    }

    setPlayedOnce(true);
  }, [conditionString, playedOnce, audiourl]);

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
