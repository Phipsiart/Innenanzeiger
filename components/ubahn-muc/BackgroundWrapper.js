export default function BackgroundWrapper() {
  return (
    <>
      <div className="top-40 z-[-20] fixed">
        {/** One Card with one space start*/}
        <div className="bg-gray-200 h-[6rem] w-[1233rem] overflow-hidden"></div>
        <div className=" h-[6rem] w-[1233rem] overflow-hidden"></div>
        <div className="border-t border-gray-300 overflow-hidden w-[1233rem]"></div>
        {/** One Card with one space end start*/}
        <div className=" h-[6rem] w-[1233rem] overflow-hidden"></div>
        <div className="border-t border-gray-300 overflow-hidden w-[1233rem]"></div>
        <div className=" h-[6rem] w-[1233rem] overflow-hidden"></div>
        <div className="border-t border-gray-300 overflow-hidden w-[1233rem]"></div>
        <div className=" h-[6rem] w-[1233rem] overflow-hidden"></div>
        <div className="border-t border-gray-300 overflow-hidden w-[1233rem]"></div>
        <div className=" h-[6rem] w-[1233rem] overflow-hidden"></div>
      </div>
    </>
  );
}
