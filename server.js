const http = require('http')
const fs = require('fs')

const port = 80

const server = http.createServer((request, response) => {
    const content = fs.readFileSync('/src/hello.txt', 'utf8')
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(`<pre>${content}</pre>`)
    response.end('<p>Version: ' + process.env.NODE_VERSION + '</p>')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
