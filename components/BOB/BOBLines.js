import React from 'react';
export default function BOBLines({ numLines }) {
  // If numLines is -1, return an empty component
  if (numLines === -1) {
    return null;
  }

  // Define the maximum number of lines
  const maxLines = 5;

  // If numLines is greater than maxLines, set it to maxLines
  if (numLines > maxLines) {
    numLines = maxLines;
  }

  // Create an array of lines and rectangles
  let linesAndRects = [];
  for (let i = 1; i <= numLines; i++) {
    linesAndRects.push(
      <React.Fragment key={i}>
        <line x1={40} y1={67 + i * 80} x2={40} y2={130 + i * 80} stroke="#2c4958" strokeWidth={2} />
        <rect width={20} height={20} x={30} y={127 + i * 80} stroke="#2c4958" strokewidth="3" fill="white" />
      </React.Fragment>
    );
  }
  const OnlyOneStop = (
    <>
      <rect width={20} height={20} x={30} y={79} fill="#2c4958" />
    </>
  );
  const OneStopLeft = (
    <>
      <line x1={40} y1={80} x2={40} y2={147} stroke="#2c4958" strokeWidth={2} />
      <rect width={20} height={20} x={30} y={79} fill="#2c4958" />
    </>
  );

  return (
    <>
      <div className="fixed left-[13.9rem]">
        <svg width={84} height={750}>
          <line x1={40} y1={60} x2={40} y2={80} stroke="#2c4958" strokeWidth={2} />
          {numLines === 0 ? OnlyOneStop : null}
          {numLines >= 1 ? OneStopLeft : null}
          {numLines !== 0 && numLines !== -1 ? linesAndRects : null}
        </svg>
      </div>
    </>
  );
}
