import { saveDataToFile } from "../exercise1/saveDataToFile";
import { getSortedStrings } from "./sortStrings";


const sampleData = ['banana', 'apple', 'cherry']

saveDataToFile("sortedFruits.json",getSortedStrings(sampleData));
  