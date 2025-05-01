'use client'

import { useState, useEffect } from 'react'
import { customAlphabet } from 'nanoid'
export default function Home() {
    const [id, setId] = useState('')

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
        <main className='flex flex-col items-center justify-center bg-gray-100 h-full'>
            <a href='https://github.com/vsnthdev/nanoid.dev' target='_blank' rel='noopener noreferrer' className='text-gray-800 mb-5 text-2xl no-underline'>
                nanoid.dev
            </a>
            <p className='font-mono cursor-pointer p-2 border border-gray-300 rounded-md bg-white text-4xl font-bold' onClick={copyToClipboard}>
                {id}
            </p>
        </main>
    )
}
