const http = require('http')
const fs = require('fs')

const port = 80

const server = http.createServer((request, response) => {
    const content = fs.readFileSync('src/hello.txt', 'utf8')
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write(content)
    response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
