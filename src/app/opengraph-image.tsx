import { ImageResponse } from 'next/og'

export const alt = 'nanoid.dev — Fast, Secure Unique NanoID Generator Online'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #090d16 0%, #0f172a 45%, #0c4a6e 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -80,
                        left: 120,
                        width: 420,
                        height: 420,
                        borderRadius: 9999,
                        background: 'rgba(14, 165, 233, 0.28)',
                        filter: 'blur(80px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100,
                        right: 120,
                        width: 460,
                        height: 460,
                        borderRadius: 9999,
                        background: 'rgba(16, 185, 129, 0.24)',
                        filter: 'blur(90px)',
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            fontSize: 32,
                            color: '#ffffff',
                            opacity: 0.9,
                            marginBottom: 16,
                            fontWeight: 500,
                        }}
                    >
                        nanoid.dev
                    </div>
                    <div
                        style={{
                            fontSize: 148,
                            fontWeight: 800,
                            color: '#f1f5f9',
                            letterSpacing: 6,
                            fontFamily: 'monospace',
                            lineHeight: 1.1,
                        }}
                    >
                        V1StGX
                    </div>
                    <div
                        style={{
                            marginTop: 32,
                            fontSize: 24,
                            color: 'rgba(241, 245, 249, 0.75)',
                            fontWeight: 500,
                        }}
                    >
                        Fast, URL-friendly, unique NanoID generator in your browser
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
