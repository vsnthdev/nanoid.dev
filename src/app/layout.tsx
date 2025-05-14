import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Footer } from '../components/footer'

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


export const metadata: Metadata = {
    title: 'nanoid.dev',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' className={`${basicallyASansSerif.className} h-full`}>
            <body
                className={`${basicallyAMono.variable} antialiased flex flex-col h-full bg-gray-900 text-white`}
            >
                <div className='flex-grow'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
