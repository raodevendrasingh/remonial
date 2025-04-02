"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<div className="flex flex-col items-center justify-center min-h-screen p-4">
					<h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
					<button
						type="button"
						onClick={() => reset()}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
					>
						Try again
					</button>
					<a href="/" className="text-blue-500 hover:underline">
						Return home
					</a>
				</div>
			</body>
		</html>
	);
}
