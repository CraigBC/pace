// pages/api/styles.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

const cssPath = "./src/styles";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Generate the CSS
  const cssFilePath = path.join(process.cwd(), `${cssPath}`, "styles.css");
  const outputFilePath = path.join(process.cwd(), `${cssPath}`, "output.css");

  try {
    execSync(`npx tailwindcss -i ${cssFilePath} -o ${outputFilePath} --minify`);
    const cssContent = fs.readFileSync(outputFilePath, "utf8");

    // Set the Content-Type header
    res.setHeader("Content-Type", "text/css");
    // Send the generated CSS as the response
    res.status(200).send(cssContent);
  } catch (error) {
    console.error("Error generating CSS:", error);
    res.status(500).send("Internal Server Error");
  }
}
