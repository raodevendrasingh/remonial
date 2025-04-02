"use client";

import { HomeNav } from "@/app/(core)/_components/HomeNav";
import type { ReactNode } from "react";

import { SidebarProvider } from "@/context/SidebarContext";

export default function CoreLayout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<main className="flex flex-col h-screen">
				<HomeNav />
				<div className="flex-1 overflow-hidden">{children}</div>
			</main>
		</SidebarProvider>
	);
}
