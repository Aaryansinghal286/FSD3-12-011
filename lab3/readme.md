
# HTTP Module

It is built in Node.js Module which allows developers to create web server and web client without installing any external package.
one of the most important module in Node.js, originally designed for building scalable network application and web servers.

1. create web servers
2. handle client request
3. Build REST APIs
4. Non-Blocking I/O
5. Foundation of Express.js

## http status codes -> res.Writehead( ), res.statusCode

- 200 -> OK
- 201 -> Created
- 400 -> Bad Request
- 401 -> Unauthorized
- 403 -> forbidden
- 404 -> Not Found
- 500 -> Internal Server Error

### Server can send to the client

1. html contents -> prg2, prg3
2. html file -> prg6
3. json data -> prg4
4. plain file
5. js file
6. any file to download
7. etc

### type of information -> res.writehead( ), res.setHeader( )
1. text/html -> for html file/contents
2. text/json -> for json data
3. text/css -> for css file/contents
4. application -> for file
5. text/plain -> for plain text file

### Note: .gitignore -> this file contains the list fo files or folder that is not added to git, these files/folders will not push on Github