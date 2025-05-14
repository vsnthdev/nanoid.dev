'use client'

import { useState, useEffect } from 'react'
import { customAlphabet } from 'nanoid'
export default function Home() {
    const [id, setId] = useState('••••••')

    const generateId = customAlphabet(
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        6
    )

    useEffect(() => {
        setId(generateId())
    }, [])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(id)
    }

    return (
        <main className='flex flex-col items-center justify-center h-full'>
            <a href='https://github.com/vsnthdev/nanoid.dev' target='_blank' rel='noopener noreferrer' className='mb-5 text-2xl text-slate-400 border-slate-400'>
                nanoid.dev
            </a>
            <p className='font-mono cursor-pointer p-2 rounded-md text-6xl lg:text-[200px] font-bold text-slate-300' onClick={copyToClipboard}>
                {id}
            </p>
        </main>
    )
}
