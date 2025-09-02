'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { customAlphabet } from 'nanoid'
import { RefreshCcw, Copy, Settings, ClipboardCheckIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useRefresh } from '../context/refresh-context'

export default function Home() {
    const [id, setId] = useState('      ')
    const [isLoaded, setIsLoaded] = useState(false)
    const { setRefreshTrigger } = useRefresh()

    const generateId = customAlphabet(
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        6
    )

    function generateAndStoreNext() {
        const nextId = generateId()
        localStorage.setItem('nextNanoid', nextId)
    }

    useEffect(() => {
        const storedId = localStorage.getItem('nextNanoid')
        if (storedId) {
            setId(storedId)
            generateAndStoreNext()
        } else {
            const newId = generateId()
            setId(newId)
            generateAndStoreNext()
        }
        setIsLoaded(true)
    }, [])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(id)
        toast('Copied to clipboard!', {
            icon: <ClipboardCheckIcon size={10} />
        })
    }

    return (
        <main className='flex flex-col items-center justify-center h-full'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col items-center'
            >
                <a href='https://github.com/vsnthdev/nanoid.dev' target='_blank' rel='noopener noreferrer' className='mb-5 text-2xl text-slate-400 border-slate-400'>
                    nanoid.dev
                </a>
                <p className='font-mono cursor-pointer p-2 rounded-md text-6xl lg:text-[200px] font-bold text-slate-100' onClick={copyToClipboard}>
                    {id}
                </p>
                {isLoaded && (
                    <div className='flex space-x-4 mt-10 md:mt-16'>
                <div className='relative group'>
                    <div className={cn(
                        'absolute -inset-[2px] rounded-md bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-0 blur-lg transition-all',
                        'group-hover:opacity-100 group-hover:blur-xl'
                    )} />
                    <motion.button
                        className='relative font-medium gap-x-2 flex items-center px-3 py-3 md:px-3 md:py-2 rounded-md bg-slate-950/60 backdrop-filter backdrop-blur-lg text-white text-sm transition-all hover:bg-slate-950/70 border border-slate-800'
                        onClick={() => {
                            const storedId = localStorage.getItem('nextNanoid')
                            if (storedId) {
                                setId(storedId)
                                generateAndStoreNext()
                            } else {
                                setId(generateId())
                                generateAndStoreNext()
                            }
                            setRefreshTrigger(prev => prev + 1)
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <RefreshCcw size={17} className='md:hidden' />
                        <RefreshCcw size={15} className='hidden md:block' />
                        <span className='hidden md:inline'>Refresh</span>
                    </motion.button>
                </div>
                <div className='relative group'>
                    <div className={cn(
                        'absolute -inset-[2px] rounded-md bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-0 blur-lg transition-all',
                        'group-hover:opacity-100 group-hover:blur-xl'
                    )} />
                    <motion.button
                        className='relative font-medium gap-x-2 flex items-center px-3 py-3 md:px-3 md:py-2 rounded-md bg-slate-950/60 backdrop-filter backdrop-blur-lg text-white text-sm transition-all hover:bg-slate-950/70 border border-slate-800'
                        onClick={copyToClipboard}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Copy size={17} className='md:hidden' />
                        <Copy size={15} className='hidden md:block' />
                        <span className='hidden md:inline'>Copy</span>
                    </motion.button>
                </div>
                <div className='relative group'>
                    <div className={cn(
                        'absolute -inset-[2px] rounded-md bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-0 blur-lg transition-all',
                        'group-hover:opacity-100 group-hover:blur-xl'
                    )} />
                    <motion.button
                        className='relative font-medium gap-x-2 flex items-center px-3 py-3 md:px-3 md:py-2 rounded-md bg-slate-950/60 backdrop-filter backdrop-blur-lg text-white text-sm transition-all hover:bg-slate-950/70 border border-slate-800'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Settings size={17} className='md:hidden' />
                        <Settings size={15} className='hidden md:block' />
                        <span className='hidden md:inline'>Settings</span>
                    </motion.button>
                </div>
            </div>
                )}
            </motion.div>
        </main>
    )
}
