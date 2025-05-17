'use client'

import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import { InfoIcon, CircleAlertIcon, BadgeCheckIcon, TriangleAlertIcon, Loader2Icon } from 'lucide-react'
import './globals.css'
import { Footer } from '../components/footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const colorPalettes = [
    {
        background: 'from-blue-500/40 to-blue-600/40',
        text: 'text-white',
        blob: 'bg-blue-400/30',
    },
    {
        background: 'from-sky-500/40 to-sky-600/40',
        text: 'text-gray-100',
        blob: 'bg-sky-400/30',
    },
    {
        background: 'from-indigo-500/40 to-indigo-600/40',
        text: 'text-blue-100',
        blob: 'bg-indigo-400/30',
    },
    {
        background: 'from-cyan-500/40 to-cyan-600/40',
        text: 'text-cyan-100',
        blob: 'bg-cyan-400/30',
    },
    {
        background: 'from-teal-500/40 to-teal-600/40',
        text: 'text-teal-100',
        blob: 'bg-teal-400/30',
    },
    {
        background: 'from-blue-600/40 to-blue-700/40',
        text: 'text-blue-200',
        blob: 'bg-blue-500/30',
    },
    {
        background: 'from-sky-600/40 to-sky-700/40',
        text: 'text-sky-200',
        blob: 'bg-sky-500/30',
    },
    {
        background: 'from-indigo-600/40 to-indigo-700/40',
        text: 'text-indigo-200',
        blob: 'bg-indigo-500/30',
    },
    {
        background: 'from-cyan-600/40 to-cyan-700/40',
        text: 'text-cyan-200',
        blob: 'bg-cyan-500/30',
    },
    {
        background: 'from-teal-600/40 to-teal-700/40',
        text: 'text-teal-200',
        blob: 'bg-teal-500/30',
    },
    {
        background: 'from-amber-500/40 to-amber-600/40',
        text: 'text-amber-100',
        blob: 'bg-amber-400/30',
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
        <html lang='en' className={`h-full overflow-hidden font-sans ${textColor} ${basicallyAMono.variable} ${basicallyASansSerif.variable}`}>
            <body className='antialiased flex flex-col h-full bg-gray-900 relative overflow-hidden'>
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
                <Toaster
                    visibleToasts={3}
                    position='bottom-center'
                    duration={60000}
                    offset={{
                        bottom: 40
                    }}
                    mobileOffset={{
                        bottom: 40,
                        left: 60,
                        right: 60
                    }}
                    toastOptions={{
                        unstyled: true,
                        classNames: {
                            title: 'text-sm font-sans font-semibold',
                            icon: '[&>svg]:size-5 mr-3',
                            description: 'text-xs opacity-70 font-sans',
                            loading: 'bg-white text-slate-700 border-slate-200 p-4',
                            toast: 'w-full rounded-2xl shadow-xl flex items-center space-x-1 p-4',
                            default: '[&:not([data-type])]:bg-black/60 [&:not([data-type])]:text-white [&:not([data-type])]:backdrop-blur-sm [&:not([data-type])]:border [&:not([data-type])]:border-white/30',
                        },
                    }}
                    icons={{
                        info: <InfoIcon />,
                        error: <CircleAlertIcon />,
                        success: <BadgeCheckIcon />,
                        warning: <TriangleAlertIcon />,
                        loading: <Loader2Icon className='animate-spin' />,
                    }}
                    gap={15}
                />
            </body>
        </html>
    )
}
