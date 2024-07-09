import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const hostname = '127.0.0.1'
const port = 3000

const routes = {
  js: { contentType: 'application/javascript', path: '.' },
  css: { contentType: 'text/css', path: './test' }
}

const server = createServer((req, res) => {
  let root = './test'

  if (!req || !req.url || req.url.endsWith('ico')) {
    res.statusCode = 404
    res.end()
  } else if (req.url === '/') {
    root = './test'

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(readFileSync(`${root}/index.html`, 'utf-8'))
  } else {
    const extension = req.url.substring(req.url.lastIndexOf('.') + 1)
    const route = routes[extension]
    const filename = req.url.substring(1)

    root = route.path

    res.setHeader('Content-Type', route.contentType)
    res.statusCode = 200
    res.end(readFileSync(`${root}/${filename}`, 'utf-8'))
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
