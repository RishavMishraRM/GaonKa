import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'crypto';

const SECRET = process.env.JWT_SECRET || 'fallback-secret';
const SESSION_NAME = process.env.SESSION_NAME || 'gaonka_session';

export async function createSession(username: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const payload = JSON.stringify({ username, expiresAt: expiresAt.getTime() });
    const signature = createHmac('sha256', SECRET).update(payload).digest('hex');
    const session = `${payload}.${signature}`;

    const cookieStore = await cookies();
    cookieStore.set(SESSION_NAME, session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
        path: '/',
    });
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_NAME)?.value;

    if (!session) return null;

    const [payload, signature] = session.split('.');
    if (!payload || !signature) return null;

    const expectedSignature = createHmac('sha256', SECRET).update(payload).digest('hex');

    // Safety check with timingSafeEqual
    const isValid = timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
    if (!isValid) return null;

    const parsed = JSON.parse(payload);
    if (Date.now() > parsed.expiresAt) {
        return null; // Expired
    }

    return parsed;
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_NAME);
}

export async function isAdmin() {
    const session = await getSession();
    return !!session;
}
