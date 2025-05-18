import { HeartIcon } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function Footer() {
    return (
        <footer className='w-full text-center py-7 font-semibold text-white/70 z-50 items-center inline-block'>
            Made with {<HeartIcon weight='fill' className='inline-block text-red-500 mb-1' size={18} />} by <a href='https://vsnth.dev' target='_blank' rel='noopener noreferrer' className='text-white/85 text-lg'>Vasanth Srivatsa</a>
        </footer>
    )
}