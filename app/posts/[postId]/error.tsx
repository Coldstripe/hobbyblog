'use client'; // Error components must be Client components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="flex flex-col max-w-lg min-h-screen py-1 mx-auto prose dark:prose-invert">
            <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
            <button className="p-4 mb-4 font-mono text-xl font-bold text-white uppercase bg-red-600 hover:bg-red-500 rounded-xl"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            <p className="text-xl">
                Or go back to <Link href="/" className="underline">Home</Link>.
            </p>
        </main>
    );
}