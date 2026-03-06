"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "./actions";

export default function AdminLogoutButton() {
    return (
        <button
            onClick={() => logoutAction()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all group"
        >
            <LogOut size={20} className="group-hover:translate-x-1 transition-transform" />
            <span className="font-medium">Logout</span>
        </button>
    );
}
