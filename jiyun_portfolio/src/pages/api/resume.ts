import { readFile } from "fs/promises";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

const RESUME_FILENAME = "김지윤_이력서.pdf";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return res.status(405).end("Method Not Allowed");
    }

    try {
        const filePath = path.join(process.cwd(), "public", "resume.pdf");
        const file = await readFile(filePath);

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
            "Content-Disposition",
            `attachment; filename="resume.pdf"; filename*=UTF-8''${encodeURIComponent(RESUME_FILENAME)}`
        );
        res.send(file);
    } catch {
        res.status(404).json({ message: "이력서 파일을 찾을 수 없습니다." });
    }
}
