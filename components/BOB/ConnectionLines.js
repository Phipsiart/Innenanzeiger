export default function ConnectionLines() {
  const lineconfig = '#feca06';

  return (
    <>
      {/*Connection Lines start*/}
      <div className="__circle fixed top-[2.61rem] left-20 z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
        </svg>
      </div>
      <div className="fixed top-[4.3rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="20" x2="20" y2="60" stroke={lineconfig} stroke-width="6" />
          <line x1="20" y1="64" x2="20" y2="70" stroke={lineconfig} stroke-width="6" />
          <line x1="20" y1="74" x2="20" y2="85" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[8.7rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      <div className="fixed top-[18.4rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      <div className="fixed top-[13.6rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      {/*Connection line from entry 2 - 3*/}
      <svg width="300" height="222" className="fixed top-[11rem] left-[6.25rem] z-50">
        <line x1="20" y1="7" x2="20" y2="58" stroke={lineconfig} stroke-width="6" />
      </svg>
      {/*Connection line from entry 3 - 4*/}
      <svg width="300" height="222" className="fixed top-[16.3rem] left-[6.25rem] z-50">
        <line x1="20" y1="1" x2="20" y2="49" stroke={lineconfig} stroke-width="6" />
      </svg>
      {/*Connection line from entry 3 - 4*/}
      <div className="fixed top-[20.5rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="58" stroke={lineconfig} stroke-width="6" />
        </svg>
        <div className="fixed top-[23.1rem] left-[5rem] z-50">
          <svg width="100" height="100">
            <circle cx="40" cy="30" r="12" fill={lineconfig} />
            <circle cx="40" cy="30" r="6" fill="#fff"></circle>
          </svg>
        </div>
      </div>
      {/*Connection Lines 4-5*/}
      <div className="fixed top-[25.2rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="58" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[27.9rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      {/*Connection Lines 5-6*/}
      <div className="fixed top-[30rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="59" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[32.7rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      {/*Connection Lines 7-8*/}
      <div className="fixed top-[34.8rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="58" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[37.5rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      {/*Connection Lines 8-9*/}
      <div className="fixed top-[39.6rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="57" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[42.2rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>
      {/*Connection Lines 9-10*/}
      <div className="fixed top-[44.3rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="11" x2="20" y2="56" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      <div className="fixed top-[46.8rem] left-[5rem] z-50">
        <svg width="100" height="100">
          <circle cx="40" cy="30" r="12" fill={lineconfig} />
          <circle cx="40" cy="30" r="6" fill="#fff"></circle>
        </svg>
      </div>

      {/*Connection Lines end */}
      <div className="fixed top-[48.3rem] left-[6.23rem] z-50">
        <svg width="300" height="222">
          <line x1="20" y1="20" x2="20" y2="30" stroke={lineconfig} stroke-width="6" />
          <line x1="20" y1="34" x2="20" y2="44" stroke={lineconfig} stroke-width="6" />
          <line x1="20" y1="48" x2="20" y2="58" stroke={lineconfig} stroke-width="6" />
        </svg>
      </div>
      {/*Connection Lines End*/}
    </>
  );
}
