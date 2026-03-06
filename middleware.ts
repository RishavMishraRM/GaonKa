import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_ROUTE = '/admin-gaonka-9fX72K';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect all admin routes
    if (pathname.startsWith(ADMIN_ROUTE)) {
        // Allow login page and API login
        if (pathname === `${ADMIN_ROUTE}/login` || pathname.startsWith('/api/auth')) {
            return NextResponse.next();
        }

        const session = request.cookies.get(process.env.SESSION_NAME || 'gaonka_session')?.value;

        if (!session) {
            // Redirect to homepage to hide existence
            return NextResponse.redirect(new URL('/', request.url));
        }

        // Add security headers for admin pages
        const response = NextResponse.next();
        response.headers.set('X-Robots-Tag', 'noindex, nofollow');
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin-gaonka-9fX72K/:path*'],
};
