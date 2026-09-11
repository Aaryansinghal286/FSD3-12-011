// if a function uses await keyword, then the function must be async.

import { writeFile, appendFile, readFile } from "fs/promises";

const readData = async (filename) => {
    try{
        const content=await readFile(filename, "utf-8");
        return content;
    }catch(e){
        console.log(e.message);
        console.log("File not found");
    }finally{
        console.log("read data finished");
    }
};

const writeData = async (filename, content) => {
    try{
        await writeFile(filename, content);
    }catch(error){
        console.log(error.message);
    }
};

const appendedData = async (filename, content) => {
    try{
        await appendFile(filename, content);
    }catch(error){
        console.log(error.message);
    }
};

const deleteFile=async (filename) => {
    try{
        await unlink(filename);
    }catch(error){
        console.log("file Not Found");
    }
};

const data=await readData("hello.txt");
console.log(data);