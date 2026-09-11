import { writeFile, appendFile, readFile } from "fs/promises"; 

// await writeFile("hello.txt", "JS is Easy");

// await appendFile("hello.txt", "\nFS is much Easy than others");

// await appendFile("hello.txt", "\nAaryan Singhal 🫩");

const data = await readFile("hello.txt", "utf-8");
console.log(data);