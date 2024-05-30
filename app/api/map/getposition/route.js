import TrainPosition from '@/lib/map/TrainPosition';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const tripId = request.nextUrl.searchParams.get('tripId') || '';
  const data = await TrainPosition(tripId);
  try {
    const response = NextResponse.json({ data }, { status: 200 });
    return response;
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred.' }, { status: 500 });
  }
}
