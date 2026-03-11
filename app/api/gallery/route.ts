import { NextResponse } from 'next/server';
import { list } from '@vercel/blob';

export const revalidate = 60; // Cache for 1 minute

export async function GET() {
    try {
        // List all blobs. In a real app you might want to filter by a prefix or folder.
        const { blobs } = await list();
        // Return just the URLs (or objects if the frontend expects objects)
        // The frontend expects array of strings according to the `setImages` type in gallery.tsx?
        // Wait, gallery.tsx: `const [images, setImages] = useState<string[]>([])`
        // And it maps `url`.
        // So I should return an array of strings.
        const imageUrls = blobs.map(blob => blob.url);
        return NextResponse.json(imageUrls);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
    }
}
