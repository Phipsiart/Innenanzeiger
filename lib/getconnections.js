
export default async function GetConnetions(from, to, departure){
const APIINSTANCE = process.env.API_INSTANCE
const fetchfromibnrurl = `https://${APIINSTANCE}/locations?query=${from}&results=1}`
const processfromibnrurl = await (await fetch(fetchfromibnrurl)).json()
const fromibnr = processfromibnrurl[0]["id"] || 8002347
const fetchtoibnurl = `https://${APIINSTANCE}/locations?query=${to}&results=1}`
const processtoibnrurl  = await (await fetch(fetchtoibnurl)).json()
const toibnr = processtoibnrurl[0]["id"] || 8002348
console.log(toibnr + fromibnr)
const url = `https://${APIINSTANCE}/journeys?from=${fromibnr}&to=${toibnr}&departure=${departure}&results=4`
const response = await fetch(url);
console.log(url)
const data = await response.json();
return data.journeys;
}