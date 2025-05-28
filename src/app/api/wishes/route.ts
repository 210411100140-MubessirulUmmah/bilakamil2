import { retrieveData, saveData } from '@/lib/firebase/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const wishes = await retrieveData('BilaKamilWishes');
    return NextResponse.json({ status: 200, message: 'success', data: wishes });
}

export async function POST(request: NextRequest) {
    const req = await request.json();
    const res = await saveData('BilaKamilWishes', req);
    return NextResponse.json({ status: res.status, message: res.message }, { status: res.statusCode });
}
