import { NextResponse } from 'next/server';
import { put, list, del } from '@vercel/blob';
import { cookies } from 'next/headers';

async function isAuth() {
    const cookieStore = await cookies();
    return cookieStore.get('admin_session')?.value === 'true';
}

export async function GET() {
    if (!await isAuth()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const { blobs } = await list();
        return NextResponse.json({ images: blobs });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    if (!await isAuth()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const filename = file.name.replace(/\s+/g, '-').toLowerCase();
        // Upload to Vercel Blob
        const blob = await put(filename, file, { access: 'public' });

        return NextResponse.json({ message: 'File uploaded successfully', blob });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    if (!await isAuth()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get('url');

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        await del(url);

        return NextResponse.json({ message: 'File deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
    }
}
