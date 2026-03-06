import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_ROUTE = '/admin-gaonka-9fX72K';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Prepare response, will be overridden for admin redirection if needed
    let response = NextResponse.next();

    // Protect all admin routes
    if (pathname.startsWith(ADMIN_ROUTE)) {
        // Allow login page and API login
        if (pathname === `${ADMIN_ROUTE}/login` || pathname.startsWith('/api/auth')) {
            // Keep going but we will still apply headers below
        } else {
            const session = request.cookies.get(process.env.SESSION_NAME || 'gaonka_session')?.value;

            if (!session) {
                // Redirect to homepage to hide existence
                return NextResponse.redirect(new URL('/', request.url));
            }
            // Add noindex for valid admin pages
            response.headers.set('X-Robots-Tag', 'noindex, nofollow');
        }
    }

    // --- SECURITY HEADERS ---
    // Content Security Policy - tailored for security, allowing Next.js defaults + essential inline scripts
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https:;
        font-src 'self' data:;
        object-src 'none';
        base-uri 'self';
        form-action 'self' https://formspree.io;
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set('X-Frame-Options', 'DENY'); // Prevent Clickjacking
    response.headers.set('X-Content-Type-Options', 'nosniff'); // Prevent MIME type sniffing
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin'); // Privacy
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    ); // Restrict powerful browser features
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'); // Enforce HTTPS

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
