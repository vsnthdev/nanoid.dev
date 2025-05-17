'use client'

import localFont from 'next/font/local'
import './globals.css'
import { Footer } from '../components/footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const colorPalettes = [
    {
        background: 'from-blue-500/20 to-blue-600/20',
        text: 'text-white',
        blob: 'bg-blue-400/10',
    },
    {
        background: 'from-sky-500/20 to-sky-600/20',
        text: 'text-gray-100',
        blob: 'bg-sky-400/10',
    },
    {
        background: 'from-indigo-500/20 to-indigo-600/20',
        text: 'text-blue-100',
        blob: 'bg-indigo-400/10',
    },
    {
        background: 'from-cyan-500/20 to-cyan-600/20',
        text: 'text-cyan-100',
        blob: 'bg-cyan-400/10',
    },
    {
        background: 'from-teal-500/20 to-teal-600/20',
        text: 'text-teal-100',
        blob: 'bg-teal-400/10',
    },
    {
        background: 'from-blue-700/20 to-blue-800/20',
        text: 'text-blue-200',
        blob: 'bg-blue-600/10',
    },
    {
        background: 'from-sky-700/20 to-sky-800/20',
        text: 'text-sky-200',
        blob: 'bg-sky-600/10',
    },
    {
        background: 'from-indigo-700/20 to-indigo-800/20',
        text: 'text-indigo-200',
        blob: 'bg-indigo-600/10',
    },
    {
        background: 'from-cyan-700/20 to-cyan-800/20',
        text: 'text-cyan-200',
        blob: 'bg-cyan-600/10',
    },
    {
        background: 'from-teal-700/20 to-teal-800/20',
        text: 'text-teal-200',
        blob: 'bg-teal-600/10',
    },
    {
        background: 'from-amber-500/20 to-amber-600/20',
        text: 'text-amber-100',
        blob: 'bg-amber-400/10',
    },
];

const basicallyASansSerif = localFont({
    src: [
        {
            path: '../../fonts/BasicallyASansSerif-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyASansSerif-Black.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-basically-a-sans-serif',
})

const basicallyAMono = localFont({
    src: [
        {
            path: '../../fonts/BasicallyAMono-Thin.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-ExtraLight.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-ExtraLight.woff2', // Assuming ExtraLight is intended for 800 or there's a typo and it should be ExtraBold if available
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Bold.woff2', // Assuming Bold is intended for 900 or there's a typo
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-basically-a-mono',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [textColor, setTextColor] = useState('');
    const [blobColor, setBlobColor] = useState('');
    const [blobPositions, setBlobPositions] = useState<{ top: string; left: string; transform: string }[]>([]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colorPalettes.length);
        const randomPalette = colorPalettes[randomIndex];
        setBackgroundColor(randomPalette.background);
        setTextColor(randomPalette.text);
        setBlobColor(randomPalette.blob);

        const positions = Array.from({ length: 8 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
        }));
        setBlobPositions(positions);
    }, []);

    return (
        <html lang='en' className={`${basicallyASansSerif.className} h-full overflow-hidden`}>
            <body
                className={`${basicallyAMono.variable} antialiased flex flex-col h-full bg-gray-900 relative overflow-hidden ${textColor}`}
            >
                <motion.div
                    className={`absolute inset-0 z-0 bg-gradient-to-br pointer-events-none ${backgroundColor}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                ></motion.div>
                {blobPositions.map((position, index) => (
                    <motion.div
                        key={index}
                        className={`absolute w-96 h-96 rounded-full blur-3xl pointer-events-none ${blobColor}`}
                        style={position}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: Math.random() * 20 - 10, // Random horizontal movement between -10 and 10
                            y: Math.random() * 20 - 10, // Random vertical movement between -10 and 10
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5, // Random duration between 5 and 10 seconds
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: 0.5 + index * 0.1, // Staggered fade-in delay
                        }}
                    />
                ))}
                <div className='flex-grow'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
