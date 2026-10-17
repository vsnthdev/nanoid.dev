export const dynamic = 'force-static'

export function GET() {
    const content = `# nanoid.dev

> Instant, zero-latency online NanoID generator for developers.

nanoid.dev is a free, open-source web application that generates cryptographically strong, URL-friendly unique NanoID strings directly in the browser.

## Key Features
- **Instant Generation**: Generates a 6-character alphanumeric (\`0-9a-zA-Z\`) NanoID immediately upon page load.
- **Zero-Latency Refresh**: Pre-generates and caches the next NanoID in \`localStorage\` so refreshing produces a new ID instantaneously.
- **One-Click Copy**: Click the NanoID or the Copy button to copy the ID directly to your clipboard.
- **Privacy First**: All IDs are generated 100% client-side in your browser using the official \`nanoid\` library (\`customAlphabet\`).

## Links
- Website: https://nanoid.dev
- Source Code: https://github.com/vsnthdev/nanoid.dev
- Author: Vasanth Srivatsa (https://vsnth.dev)
`

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    })
}
