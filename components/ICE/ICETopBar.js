export default function ICETopBar({ currentTime, Line }) {
  return (
    <>
      <div className="h-16 z-[900] fixed top-0 bg-[#131d36] w-full">
        <div className="fixed text-white text-[2.4rem] right-2">{currentTime}</div>
        <div className="fixed text-white text-[2.4rem] left-2">{Line.replace('ICE', 'ICE ')}</div>
      </div>
      <div className="fixed z[-400] bg-[#dddcdc] top-0 bottom-0 w-full"></div>
    </>
  );
}
