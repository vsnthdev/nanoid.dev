import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-Web',
                    'PerplexityBot',
                    'Google-Extended',
                    'Applebot-Extended',
                    'CCBot',
                ],
                allow: ['/', '/llms.txt'],
            },
        ],
        sitemap: 'https://nanoid.dev/sitemap.xml',
        host: 'https://nanoid.dev',
    }
}
