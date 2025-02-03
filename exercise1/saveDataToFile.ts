import { writeFileSync } from "fs";

export const saveDataToFile = <T>(filePath: string, data: T): void => {
  try {
    writeFileSync(filePath, JSON.stringify(data, null, 2), { encoding: "utf-8" });
    console.log(`Data successfully saved to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file "${filePath}": ${error instanceof Error ? error.message : error}`);
  }
};