import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(request) {
	const { text } = await request.json();

	const translatedTextPromise = new Promise((resolve, reject) => {

		exec(
			`ls`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				console.log(stdout)
				resolve(stdout);
			}
		);

	});

	const translatedText = await translatedTextPromise;
	return NextResponse.json({ translatedText });
}