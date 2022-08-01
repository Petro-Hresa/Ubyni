import Fastify from 'fastify'
import mysql from 'mysql2'

const app = Fastify({
  logger: true
})

const connect = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ubyni'
})


const start = async () => {
  await app.listen({ port: 3000 }, function (err, address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
}
start()



// // Declare a route
app.get('/', function (request, reply) {
  connect.query('SELECT * FROM users', (err, results, fileds)=>{
    reply.send({ hello: results })
  }

  )
  
})

// Run the server!
