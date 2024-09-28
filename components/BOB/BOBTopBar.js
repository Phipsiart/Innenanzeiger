import BOBClock from './BOBClock';
export default function BOBTopBar({ date, line }) {
  return (
    <>
      <div className="fixed top-0 h-12 z-[9999] bg-[#004e94] w-full">
        <BOBClock />
        <span className="fixed end-48  text-[2rem]  text-white">{date}</span>
        <span className="fixed top-0 start-3 text-white text-[2rem]">{line}</span>
      </div>
    </>
  );
}
