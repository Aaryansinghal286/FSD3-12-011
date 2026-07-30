import { log } from "console";
import { EventEmitter } from "events";

const form = new EventEmitter;

form.on("Submit", (uname, password) => {
    console.log("Form Submitted");
    console.log(`User Name: ${uname}`);
    console.log(`User Password: ${password}`);    
})
form.emit("Submit", "abc@abc.com🙄", "11223322");