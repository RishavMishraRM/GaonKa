"use server";

import { createSession } from "@/lib/auth";

export async function loginAction(username: string, password: string) {
    const adminUser = process.env.ADMIN_USERNAME;
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminUser || !adminPass) {
        console.error("Admin credentials not configured in environment variables");
        return { success: false, error: "System configuration error" };
    }

    if (username === adminUser && password === adminPass) {
        await createSession(username);
        return { success: true };
    }

    // Rate limiting or generic error
    return { success: false, error: "Access denied" };
}
