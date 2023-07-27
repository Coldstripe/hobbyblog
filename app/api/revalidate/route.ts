import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
    const secret = request.headers.get('X-Hub-Signature')
    const crypto = require('crypto');
    if(!secret){
        return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    const compare = Buffer.byteLength(secret, 'utf-8') === Buffer.byteLength(`sha1=${process.env.GITHUB_SECRET_HASH}`, 'utf-8') && crypto.timingSafeEqual(Buffer.from(secret, 'utf-8'), Buffer.from(`sha1=${process.env.GITHUB_SECRET_HASH}`, 'utf-8'));

    if (!compare) {
        return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const path = request.nextUrl.searchParams.get('path') || '/'

    revalidatePath(path)

    return NextResponse.json({ revalidated: true })
}