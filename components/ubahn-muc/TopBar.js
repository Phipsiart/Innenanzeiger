import Image from 'next/image';
export default function TopBar({ line, nextStopStatus, closestStopIndex, RenderCurrentTime }) {
  const status = nextStopStatus[closestStopIndex + 1]
    .replace('Abgefahren', 'Endstation')
    .replace('In Kürze erreichen wir', 'Nächster Halt');
  const statuseng = nextStopStatus[closestStopIndex + 1]
    .replace('Abgefahren', 'Final Stop')
    .replace('In Kürze erreichen wir', 'Next stop')
    .replace('Nächster Halt', 'Next Stop');

  return (
    <>
      <div className="fixed right-0 top-0 z-[5000] bg-gray-200 pl-10 pr-8">
        <span className="text-[3.2rem]">{RenderCurrentTime}</span>
      </div>
      <div className="h-32 bg-white fixed top-0 w-full z-[4998]">
        <Image className="mt-3 ml-8" src={`/train-lines/ubahn-muc/${line}.svg`} height={160} width={160} alt=""></Image>
        <div className="fixed left-[17rem] text-[1.3rem] mt-4">
          <span className="">{status}</span>
          <span className="ml-2 italic text-gray-500">{statuseng}</span>
        </div>
        <div className="fixed right-[1rem] text-[1.3rem] mt-4">
          <span className="">Ankunft</span>
          <span className="ml-2 italic text-gray-500">Arrival</span>
        </div>
      </div>
    </>
  );
}
