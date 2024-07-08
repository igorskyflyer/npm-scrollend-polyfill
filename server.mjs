import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((req, res) => {
	if (req.url === '/') {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')
		res.end(readFileSync('./test/index.html', 'utf-8'))
	} else if (req.url?.endsWith('.mjs')) {
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/javascript')
		res.end(readFileSync(`.${req.url}`, 'utf-8'))
	} else {
		res.statusCode = 404
		res.end()
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})
