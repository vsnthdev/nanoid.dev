import { ImageResponse } from 'next/og'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stopColor='#38bdf8' />
                            <stop offset='100%' stopColor='#0284c7' />
                        </linearGradient>
                    </defs>
                    <path
                        d='M16 2C25.5 2 30 6.5 30 16C30 25.5 25.5 30 16 30C6.5 30 2 25.5 2 16C2 6.5 6.5 2 16 2Z'
                        fill='url(#g)'
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
