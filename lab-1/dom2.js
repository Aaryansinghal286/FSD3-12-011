// DOM --> Document Object Model 2

import { EventEmitter } from "events";

const button= new EventEmitter();

button.on("click", () => {
    console.log("Task1");
})

button.on("click", () => {
  console.log("Task2");
});

button.emit("click")