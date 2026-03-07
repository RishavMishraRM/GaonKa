import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GaonKa - 100% Organic Farm to Home',
        short_name: 'GaonKa Organic',
        description: 'Get real, 100% organic, preservative-free food delivered directly from Indian villages to your kitchen.',
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
