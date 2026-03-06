import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GaonKa - Farm to Home',
        short_name: 'GaonKa',
        description: 'Real food from Indian villages. No preservatives.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#2A1B12',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
