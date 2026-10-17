import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import React from 'react'
import { ClientLayout } from '../components/client-layout'

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
            path: '../../fonts/BasicallyASansSerif-Light.woff2',
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
            path: '../../fonts/BasicallyAMono-ExtraLight.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../fonts/BasicallyAMono-Bold.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-basically-a-mono',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://nanoid.dev'),
    title: {
        default: 'NanoID Generator — Fast, Secure Unique IDs Online | nanoid.dev',
        template: '%s | nanoid.dev',
    },
    description:
        'Generate fast, URL-friendly, cryptographically strong unique NanoID strings instantly in your browser. One-click copy, instant refresh, and zero latency.',
    applicationName: 'nanoid.dev',
    keywords: [
        'nanoid',
        'nanoid generator',
        'nano id',
        'online nanoid generator',
        'unique id generator',
        'short id generator',
        'random string generator',
        'url friendly id',
        'uuid alternative',
        '6 character id generator',
        'alphanumeric id generator',
        'developer tools',
    ],
    authors: [{ name: 'Vasanth Srivatsa', url: 'https://vsnth.dev' }],
    creator: 'Vasanth Srivatsa',
    publisher: 'Vasanth Srivatsa',
    category: 'developer tools',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'NanoID Generator — Fast, Secure Unique IDs Online | nanoid.dev',
        description:
            'Generate fast, URL-friendly, cryptographically strong unique NanoID strings instantly in your browser. One-click copy, instant refresh, and zero latency.',
        url: 'https://nanoid.dev',
        siteName: 'nanoid.dev',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NanoID Generator — Fast, Secure Unique IDs Online | nanoid.dev',
        description:
            'Generate fast, URL-friendly, cryptographically strong unique NanoID strings instantly in your browser. One-click copy, instant refresh, and zero latency.',
        site: '@vsnthdev',
        creator: '@vsnthdev',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export const viewport: Viewport = {
    themeColor: '#111827',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'nanoid.dev',
    alternateName: 'NanoID Online Generator',
    url: 'https://nanoid.dev',
    description:
        'Generate fast, URL-friendly, cryptographically strong unique NanoID strings instantly in your browser with one-click copy and zero latency.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    author: {
        '@type': 'Person',
        name: 'Vasanth Srivatsa',
        url: 'https://vsnth.dev',
    },
    codeRepository: 'https://github.com/vsnthdev/nanoid.dev',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={`h-full overflow-hidden font-sans ${basicallyAMono.variable} ${basicallyASansSerif.variable}`}>
            <body className='antialiased flex flex-col h-full bg-gray-900 relative overflow-hidden'>
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
