import { readFullStations } from 'db-stations';
import Fuse from 'fuse.js';
import { NextResponse } from 'next/server';
export async function GET(request) {
  const q = request.nextUrl.searchParams.get('q') || 'Berlin Hbf';
  const stations = [];

  try {
    for await (const station of readFullStations()) {
      stations.push(station);
    }

    const options = {
      includeScore: true,
      keys: ['name'],
    };

    const fuse = new Fuse(stations, options);
    const result = fuse.search(q);

    // Get up to 8 best matching stations
    const bestMatches = result.slice(0, 8).map(({ item }) => ({
      id: item.id,
      name: item.name,
    }));
    return NextResponse.json({ bestMatches }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error while fetching data.' }, { status: 500 });
  }
}
