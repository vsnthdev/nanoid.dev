'use client'

import { Toaster } from 'sonner'
import { InfoIcon, CircleAlertIcon, BadgeCheckIcon, TriangleAlertIcon, Loader2Icon } from 'lucide-react'
import { Footer } from './footer'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RefreshContext } from '../context/refresh-context'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { colors } from '../lib/colors'

export function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [backgroundColor, setBackgroundColor] = useState('')
    const [textColor, setTextColor] = useState('')
    const [blobColor, setBlobColor] = useState('')
    const [blobPositions, setBlobPositions] = useState<{ top: string; left: string; scale: number; x: number; y: number }[]>([])
    const [previousColorIndex, setPreviousColorIndex] = useLocalStorage('previousColorIndex', -1)
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * colors.length)
        while (randomIndex === previousColorIndex) {
            randomIndex = Math.floor(Math.random() * colors.length)
        }
        setPreviousColorIndex(randomIndex)
        const randomPalette = colors[randomIndex]
        setBackgroundColor(randomPalette.background)
        setTextColor(randomPalette.text)
        setBlobColor(randomPalette.blob)

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${randomPalette.favicon.from}" />
                    <stop offset="100%" stop-color="${randomPalette.favicon.to}" />
                </linearGradient>
            </defs>
            <path d="M16 2C25.5 2 30 6.5 30 16C30 25.5 25.5 30 16 30C6.5 30 2 25.5 2 16C2 6.5 6.5 2 16 2Z" fill="url(#g)" />
        </svg>`
        const faviconUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`
        const existingIcons = document.querySelectorAll<HTMLLinkElement>("link[rel='icon'], link[rel='shortcut icon']")
        if (existingIcons.length > 0) {
            existingIcons.forEach((link, idx) => {
                if (idx === 0) {
                    link.type = 'image/svg+xml'
                    link.sizes = 'any'
                    link.href = faviconUrl
                } else {
                    link.remove()
                }
            })
        } else {
            const link = document.createElement('link')
            link.rel = 'icon'
            link.type = 'image/svg+xml'
            link.sizes = 'any'
            link.href = faviconUrl
            document.head.appendChild(link)
        }

        const positions = Array.from({ length: 8 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: 0.5 + Math.random() * 0.5,
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
        }))
        setBlobPositions(positions)
    }, [refreshTrigger])

    return (
        <div className={`flex flex-col h-full relative overflow-hidden ${textColor}`}>
            <motion.div
                key={refreshTrigger}
                className={`absolute inset-0 z-0 bg-gradient-to-br pointer-events-none ${backgroundColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: backgroundColor ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
            {blobPositions.map((position, index) => (
                <motion.div
                    key={`${refreshTrigger}-${index}`}
                    className={`absolute z-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${blobColor}`}
                    style={{ top: position.top, left: position.left }}
                    initial={{ opacity: 0, scale: position.scale, x: 0, y: 0 }}
                    animate={{
                        opacity: 1,
                        scale: position.scale,
                        x: position.x,
                        y: position.y,
                    }}
                    transition={{
                        opacity: { duration: 0.25, ease: 'easeOut' },
                        x: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: index * 0.1,
                        },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            delay: index * 0.1,
                        },
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
                    bottom: 40,
                }}
                mobileOffset={{
                    bottom: 40,
                    left: 60,
                    right: 60,
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
        </div>
    )
}
