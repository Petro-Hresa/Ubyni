// CommonJs
const fastify = require('fastify')({
  logger: true
})

const start = async () => {
  await fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
}
start()

// // Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'HP' })
})

// Run the server!
