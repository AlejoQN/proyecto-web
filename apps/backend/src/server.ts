import { createServer } from 'node:http'

const port = Number(process.env.PORT ?? 3001)

const server = createServer((_request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(
    JSON.stringify({
      service: 'proyecto-web-backend',
      status: 'ok',
      message: 'Backend listo para futuras integraciones, incluida IA.',
    }),
  )
})

server.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
