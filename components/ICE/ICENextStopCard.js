export default function ICENextStopCard({nextStop}){
    return(
        <>
        <div className="z-[100] fixed top-[4.7rem] w-full">
            <div className="bg-white p-5 shadow-lg mr-2 ml-2 rounded">
            <div className=" text-[1.5rem] flex">
                <p className="text-[1.5rem] text-gray-700">Nächster Halt</p>
                <p className="absolute right-6 top-4">Gleis</p>
                <p className="absolute top-4 right-28">Ankunft in 11 Minuten</p>
            </div>
            <div className="flex mt-2  text-[2.8rem]">
                <p className="font-bold">{nextStop.name}</p>
                <p className="font-bold absolute right-[16rem]">{nextStop.plannedArrival}</p>
                <p className="font-bold absolute right-[6.7rem]">{nextStop.arrival}</p>
                <p className="font-bold absolute right-6">{nextStop.arrivalPlatform}</p>
            </div>
            </div>
        </div>
        </>
    )
}