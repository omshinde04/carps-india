import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        const validUsername = process.env.ADMIN_USERNAME || 'abhed';
        const validPassword = process.env.ADMIN_PASSWORD || 'admin@abhed';

        if (username === validUsername && password === validPassword) {
            // Set HTTP-only cookie
            // Note: In Next.js 15/latest (which this likely is given 'next/headers'), cookies() is async in some contexts or synchronous in others depending on version. 
            // Checking package.json... Next 16.0.10. cookies() is awaitable.
            const cookieStore = await cookies();

            cookieStore.set('admin_session', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    // Check if authenticated
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (session?.value === 'true') {
        return NextResponse.json({ authenticated: true });
    }
    return NextResponse.json({ authenticated: false }, { status: 401 });
}
