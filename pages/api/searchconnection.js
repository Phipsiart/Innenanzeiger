export default async function handler(req, res) {
  const from = req.query.from || 8002347;
  const to = req.query.to || 8002348;
  const fetchresults = await fetch(
    "https://zugportal.de/@prd/zupo-travel-information/api/public/ri/journey/d410c845-14b8-3a21-b448-b14638bea6d2",
    {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "de-DE,en-US;q=0.7,en;q=0.3",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
      },
      method: "GET",
      mode: "cors",
    }
  );
  const results = await fetchresults.json();
  let compute = results.stops.Math.max();

  console.log(compute); // Outputs the latest departureId  console.log(calculatelaststation);
  // Return the count as the response
  res.status(200).json({ results });
}
