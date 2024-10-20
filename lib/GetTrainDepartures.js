import ReplaceNames from "./filter/ReplaceNames";
import FormatDate from "./filter/FormatDate";

export default async function GetTrainData(IBNR, type) {
    const APIINSTANCE = process.env.API_INSTANCE;
    const options = {
        method: 'GET',
        next: { revalidate: 0 }  // Revalidation bei jedem Request
    };
    // Sicherstellen, dass die API-Umgebungsvariable gesetzt ist
    if (!APIINSTANCE) {
        throw new Error("API_INSTANCE environment variable is not set.");
    }

    // Typ festlegen (arrivals oder departures)
    const validTypes = ['arrivals', 'departures'];
    if (!validTypes.includes(type)) {
        throw new Error(`Invalid type: ${type}. Expected one of ${validTypes.join(', ')}`);
    }

    // URL basierend auf dem Typ
    const url = `https://${APIINSTANCE}/stops/${IBNR}/${type}?results=40&duration=10000`;

    try {
        const response = await fetch(url, options);

        // Überprüfung auf gültige Antwort
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const apiresult = await response.json();

        // Debug-Ausgabe, um das Ergebnis zu überprüfen
        console.log("API result:", apiresult);

        // Sicherstellen, dass die richtigen Daten vorhanden sind
        if (!apiresult || !apiresult[type]) {
            throw new Error(`${type} data is missing or undefined.`);
        }

        console.log(`${type} data found:`, apiresult[type]);

        // Daten nur verarbeiten, wenn Daten vorhanden sind
        if (apiresult[type].length === 0) {
            return { error: `No ${type} found.` };
        }

        // Daten verarbeiten
        const data = apiresult[type].map((connection) => {
            const direction = ReplaceNames(connection.direction); // Richtung ggf. ersetzen
            const plannedWhen = FormatDate(connection.plannedWhen); // Datum formatieren
            const delay = connection.delay ? connection.delay / 60 : 0; // Verspätung in Minuten umrechnen
            const platform = connection.platform || ""; // Plattform oder "N/A"
            const line = connection.line ? ReplaceNames(connection.line.name.replace(/ /g,'')) : "Unknown Line"; // Linienname oder unbekannt
            const product = connection.line ? connection.line.productName : '';
            let issbahnmuc;
            let isubahnmuc;
            isubahnmuc = false;
            issbahnmuc = false;
            if (connection?.line?.operator?.id == "db-regio-ag-s-bahn-munchen"){
                issbahnmuc = true
            }
            if (connection?.line?.adminCode == "swm001"){
                isubahnmuc = true
            }
            // Zielname oder Ursprungsort je nach Typ
            const destination = type === 'arrivals' 
                ? (connection.provenance ? ReplaceNames(connection.provenance) : "Unknown Origin") // Ursprungsort
                : (connection.destination ? ReplaceNames(connection.destination.name) : "Unknown Destination"); // Zielname
       
            return {
                direction,
                plannedWhen,
                delay,
                platform,
                line,
                destination,
                issbahnmuc,
                isubahnmuc,
                product,
            };
        });

        // Debug-Ausgabe der verarbeiteten Daten
        console.log(`Processed ${type} data:`, data);

        // Verarbeitete Daten zurückgeben
        return data;

    } catch (error) {
        console.error(`Failed to fetch train ${type}:`, error);
        return { error: error.message };
    }
}
