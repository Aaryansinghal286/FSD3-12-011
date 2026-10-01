import express from "express";

const app = express();

app.get("/", (req, res) => {
    //res.send("Hello express");
    //res.send("<h1>Hello Express</h1>");
    res.send(`
        <h1>Hello Server</h1>
        <h2>I am responding from Express</h2>
        <h3>The code is minimal and easy to return</h3>
    `);
});

// this line must be last line 👇
app.listen(4444, () => console.log("prg1 is running at 4444"));
