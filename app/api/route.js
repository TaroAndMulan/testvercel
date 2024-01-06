import { NextResponse } from "next/server";
import { exec } from "child_process";

export async function POST(request) {
	const { text } = await request.json();

	const translatedTextPromise = new Promise((resolve, reject) => {

        /*
		exec(
			`pypy\\Scripts\\activate.bat && python component\\pytest.py`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					reject(error);
				}
				resolve(stdout);
			}
		);*/
        resolve("HAHA NOOB")

	});

	const translatedText = await translatedTextPromise;
	return NextResponse.json({ translatedText });
}