'use client'

import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import { InfoIcon, CircleAlertIcon, BadgeCheckIcon, TriangleAlertIcon, Loader2Icon } from 'lucide-react'
import './globals.css'
import { Footer } from '../components/footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshContext } from '../context/refresh-context'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { colors } from '../lib/colors'



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
            path: '../../fonts/BasicallyASansSerif-Light.woff2', // Assuming Light is intended for 900 or there's a typo
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
    const [previousColorIndex, setPreviousColorIndex] = useLocalStorage('previousColorIndex', -1);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * colors.length);
        while (randomIndex === previousColorIndex) {
            randomIndex = Math.floor(Math.random() * colors.length);
        }
        setPreviousColorIndex(randomIndex);
        const randomPalette = colors[randomIndex];
        setBackgroundColor(randomPalette.background);
        setTextColor(randomPalette.text);
        setBlobColor(randomPalette.blob);

        const positions = Array.from({ length: 8 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
        }));
        setBlobPositions(positions);
    }, [refreshTrigger]);

    return (
        <html lang='en' className={`h-full overflow-hidden font-sans ${textColor} ${basicallyAMono.variable} ${basicallyASansSerif.variable}`}>
            <body className='antialiased flex flex-col h-full bg-gray-900 relative overflow-hidden'>
                <motion.div
                    key={refreshTrigger}
                    className={`absolute inset-0 z-0 bg-gradient-to-br pointer-events-none ${backgroundColor}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
                {blobPositions.map((position, index) => (
                    <motion.div
                        key={`${refreshTrigger}-${index}`}
                        className={`absolute w-96 h-96 rounded-full blur-3xl pointer-events-none ${blobColor}`}
                        style={position}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            x: Math.random() * 20 - 10,
                            y: Math.random() * 20 - 10,
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: index * 0.1,
                        }}
                    />
                ))}
                <div className='flex-grow'>
                    <RefreshContext.Provider value={{ setRefreshTrigger }}>
                        {children}
                    </RefreshContext.Provider>
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
