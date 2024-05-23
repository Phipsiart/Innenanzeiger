import Image from 'next/image';
import AvailableTypesofConnections from '@/components/ubahn-muc/AvailableTypesofConnections';

export default function DepartureCard({ nextstop, stopover, closestStopIndex }) {
  return (
    <>
      {/* Top bar connection start */}
      <div className="mt-40">
        {stopover.slice(closestStopIndex).map((stop, index) => {
          const isLastStop = index === stopover.slice(closestStopIndex).length - 1;
          return (
            <div className="flex" key={index}>
              {index < 5 ? (
                <div className="h-[6rem]">
                  <AvailableTypesofConnections products={stop.typeofconnections} mainscreen={true} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fixed z-[9998] mt-[0.1rem] left-[13.8rem]"
                    width="24"
                    height="48"
                    viewBox="0 0 24 48"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="7"
                  >
                    <line x1="12" y1="0" x2="12" y2="33" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fixed mt-[1.53rem]  left-[13.05rem]"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" fill="none" r="6" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fixed z-[9998] mt-[3.9rem]  left-[13.8rem]"
                    width="24"
                    height="48"
                    viewBox="0 0 24 48"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="7"
                  >
                    <line x1="12" y1="0" x2="12" y2="36" />
                  </svg>
                  <span className="text-[3.6rem] fixed left-[16.8rem] mt-[0.2rem]">{stop.name}</span>
                  <span className="text-[2.8rem] fixed right-4 mt-[1.1rem]">{stop.arrival}</span>
                </div>
              ) : isLastStop && stopover.slice(closestStopIndex).length > 4 ? (
                <div className="h-[6rem] mt-4 z-[900]">
                  <AvailableTypesofConnections products={stop.typeofconnections} mainscreen={true} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fixed left-[13.8rem]"
                    width="24"
                    height="80"
                    viewBox="0 0 24 80"
                  >
                    <circle cx="12" cy="10" r="5" fill="#4b5563" />

                    <circle cx="12" cy="30" r="5" fill="#4b5563" />

                    <path d="M 4,50 A 8,8 0 0,1 20,50" fill="none" stroke="#4b5563" stroke-width="5" />
                  </svg>
                  <span className="text-[3.6rem] laststop fixed left-[16.8rem] mt-[0.2rem]">{stop.name}</span>
                  <span className="text-[2.8rem] fixed right-4 mt-[1.1rem]">{stop.arrival}</span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
