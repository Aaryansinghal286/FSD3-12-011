# EventLoop

js is synchronous and single threaded bydefault

## There can be async behaviour:
-with BrowserAPI -setTimeout, setinterval, setImmediate, nextTick
-with promises
-with event handlers
a function not executed immediately but it must be executed after a while. It has some status during the execution. At final, it may resolve {resolve() => success} or reject {reject() => unsuccess}
Modern JS is divided into two categories: 
1. common js (cjs) -> supports OOPs -> require
    - priority {nextTick, promise, setImmediate/setTimeout}
2. ModuleJS (.mjs) -> follow modular approach -> import
    - priority {promise, nextTick, setImmediate/setTimeout}


# File System {FS Module}
in the file, all folders are:
1. file - readFile, writeFile, appendFile
2. folder - mkdir(md), rmdir(rm)
3. file metadat - stack, rstack, lstack
4. watch - watch , unwatch

all functions start with promise so it must be called with awake