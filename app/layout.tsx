import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) {
            setCount(10);
        }
    });

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <input name="pass" type="passwors" autoFocus />
            <footer>2023</footer>
        </html>
    );
}
