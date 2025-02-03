import { saveDataToFile } from "./saveDataToFile";

const sampleData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]

saveDataToFile("people.json", sampleData);
  