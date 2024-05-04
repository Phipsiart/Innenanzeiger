import Image from 'next/image';
import AvailableTypesofConnections from '@/components/ubahn-muc/AvailableTypesofConnections';
export default function DepartureCard({ nextstop, stopover, closestStopIndex }) {
  return (
    <>
      {/*Top bar connection start */}
      <div className="mt-40">
        {stopover.slice(closestStopIndex).map((stop, index) => (
          <div className="flex" key={index}>
            <div className="h-[6rem]">
              <AvailableTypesofConnections products={stop.typeofconnections} mainscreen={true} />
              <span className="text-[3.6rem] fixed left-[16.8rem] mt-[0.2rem]">{stop.name}</span>
              <span className="text-[2.8rem] fixed right-4 mt-[1.1rem]">{stop.arrival}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
