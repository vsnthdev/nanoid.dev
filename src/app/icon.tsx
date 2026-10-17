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
                    borderRadius: 8,
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #064e3b 100%)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#f8fafc',
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: -0.5,
                }}
            >
                ID
            </div>
        ),
        {
            ...size,
        }
    )
}
