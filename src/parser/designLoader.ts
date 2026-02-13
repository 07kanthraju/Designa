import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function loadDesign(moduleName: string) {
  const filePath = path.join(
    process.cwd(),
    ".designa",
    moduleName,
    `${moduleName.toLowerCase()}.yaml`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Design file not found at ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  return yaml.load(fileContent);
}
