import Image from "next/image";

export default function TrainCard({ data }) {
    return (
        <>
            {data.map((train, index) => {
                // Aktuelle Zeit im Vergleich zur geplanten Abfahrtszeit
                const now = new Date();

                // Angenommene `plannedWhen` im Format HH:mm, z.B. "14:30"
                const [hours, minutes] = train.plannedWhen.split(":").map(Number);
                const plannedDeparture = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

                // Wenn der Zug bereits abgefahren ist, nicht anzeigen
                if (plannedDeparture < now) {
                    return null; // Züge, die bereits abgefahren sind, werden nicht gerendert
                }

                const minutesToDeparture = plannedDeparture && !isNaN(plannedDeparture) 
                    ? Math.max(0, Math.ceil((plannedDeparture - now) / 60000)) // Zeit in Minuten bis zur Abfahrt
                    : NaN; // Falls plannedDeparture ungültig ist

                // Dynamische Klassen für den Rahmen
                const animatedClass = minutesToDeparture === 0 ? "animate-pulse border-4 border-green-500" : "border-transparent";

                return (
                    <div key={index} className={`flex justify-center mt-1 mr-5 ml-5`}>
                        <div className={`bg-[#e5e7eb] rounded-2xl h-20 flex w-full items-center p-4 relative border ${animatedClass}`}>
                            {/* S-Bahn */}
                            {train.issbahnmuc ? (
                                <>
                                    <Image
                                        className="mr-4"
                                        src={`/train-lines/sbahn-muc/${train.line}.svg`}
                                        height={48}
                                        width={48}
                                        alt={`Image of the S-Bahn line ${train.line}`}
                                    />
                                    <div className="flex-grow flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="text-lg">{train.destination}</p>
                                        </div>
                                    </div>
                                </>
                            ) : null}

                            {/* U-Bahn */}
                            {train.isubahnmuc ? (
                                <>
                                    <Image
                                        className="mr-4"
                                        src={`/train-lines/ubahn-muc/${train.line}.svg`}
                                        height={48}
                                        width={48}
                                        alt={`Image of the U-Bahn line ${train.line}`}
                                    />
                                    <div className="flex-grow flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="text-lg">{train.destination}</p>
                                        </div>
                                    </div>
                                </>
                            ) : null}

                            {/* Alle anderen Transportmittel */}
                            {!train.issbahnmuc && !train.isubahnmuc ? (
                                <>
                                    <Image
                                        className="mr-4"
                                        src={`/transportation-types/${train.product}.svg`}
                                        height={48}
                                        width={48}
                                        alt={`Image of the transportation type ${train.product}`}
                                    />
                                    <div className="flex-grow flex items-center justify-between">
                                        <div className="flex items-center">
                                            <p className="mr-2">{train.line.replace('Bus', '').replace('STR', '')}</p>
                                            <p className="text-lg">{train.destination}</p>
                                        </div>
                                    </div>
                                </>
                            ) : null}

                            {/* Departure Time & Platform */}
                            <div className="absolute right-[4.4rem] flex flex-col items-end">
                                <div className="text-lg font-semibold">
                                    {train.plannedWhen} {/* Exact Time (HH:mm) */}
                                </div>
                                <div className="text-lg text-gray-500">
                                    {isNaN(minutesToDeparture) ? "N/A" : `in ${minutesToDeparture} min`} {/* Relative Time */}
                                </div>
                            </div>
                            <div className="text-3xl">
                                    {train.platform}
                                </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
