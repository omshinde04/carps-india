'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    interface BlobImage {
        url: string;
        pathname: string;
    }

    const [images, setImages] = useState<BlobImage[]>([]);
    const [uploading, setUploading] = useState(false);

    // Hardcoded credentials as requested
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const res = await fetch('/api/auth/login');
            if (res.ok) {
                const data = await res.json();
                if (data.authenticated) {
                    setIsAuthenticated(true);
                    fetchImages();
                }
            }
        } catch (e) {
            // Not authenticated
        }
    };

    const fetchImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            if (data.images) {
                setImages(data.images);
            }
        } catch (error) {
            console.error('Failed to fetch images', error);
            alert('Failed to load images');
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                setIsAuthenticated(true);
                fetchImages();
            } else {
                alert('Invalid Credentials');
            }
        } catch (error) {
            alert('Login Error');
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        setUploading(true);
        const files = Array.from(e.target.files);

        // Upload files concurrently (with a limit if this were a large app, but usually fine for 5-10 files)
        try {
            await Promise.all(files.map(async (file) => {
                const formData = new FormData();
                formData.append('file', file);

                const res = await fetch('/api/images', {
                    method: 'POST',
                    body: formData,
                });
                if (!res.ok) console.error(`Failed to upload ${file.name}`);
            }));

            await fetchImages();
            e.target.value = ''; // Reset input
        } catch (error) {
            console.error(error);
            alert('One or more uploads failed. Check console.');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (url: string) => {
        if (!confirm(`Are you sure you want to delete this image?`)) return;

        try {
            const res = await fetch(`/api/images?url=${encodeURIComponent(url)}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error('Delete failed');

            await fetchImages();
        } catch (error) {
            console.error(error);
            alert('Failed to delete image');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <form onSubmit={handleLogin} className="w-full max-w-sm rounded bg-white p-8 shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Admin Login</h2>
                    <div className="mb-4">
                        <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
                    <button
                        onClick={async () => {
                            await fetch('/api/auth/logout', { method: 'POST' });
                            setIsAuthenticated(false);
                            setUsername('');
                            setPassword('');
                        }}
                        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>

                <div className="mb-8 rounded bg-white p-6 shadow">
                    <h3 className="mb-4 text-xl font-semibold">Upload New Image</h3>
                    <div className="flex items-center space-x-4">
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleUpload}
                            disabled={uploading}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                        />
                        {uploading && <span className="text-blue-600">Uploading...</span>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {images.map((img) => (
                        <div key={img.url} className="relative group overflow-hidden rounded bg-white shadow hover:shadow-lg">
                            <div className="aspect-square relative w-full">
                                <Image
                                    src={img.url}
                                    alt={img.pathname}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                                <button
                                    onClick={() => handleDelete(img.url)}
                                    className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                            <div className="bg-gray-100 p-2 text-center text-sm truncate">{img.pathname}</div>
                        </div>
                    ))}
                    {images.length === 0 && (
                        <div className="col-span-full py-12 text-center text-gray-500">
                            No images found in gallery.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
