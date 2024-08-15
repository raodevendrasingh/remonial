"use client"
import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				Signed in as {session.user.email} <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		);
	}
	return (
		<>
			Not signed in <br />
			<button className="m-2 px-2 py-1 rounded-md text-white bg-green-500" onClick={() => signIn()}>Sign in</button>
		</>
	);
}
