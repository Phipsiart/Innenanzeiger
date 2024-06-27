import Innenanzeiger from '../../../lib/departures/Innenanzeiger'
import { NextResponse } from 'next/server';
export async function GET(request) {
const q = request.nextUrl.searchParams.get('q') || 'Berlin Hbf';
const data = await Innenanzeiger(encodeURIComponent(q))
    return NextResponse.json({ data }, { status: 200 });
  }
