import { FastifyError, FastifyInstance, FastifyPluginOptions } from "fastify";
import { connect } from "../../db/db";

function userRoute (app: FastifyInstance, _: FastifyPluginOptions, done: (err? : FastifyError) => void){

   app.get('/users', function (request, reply) {
      connect.query('SELECT * FROM users', (err, results, fileds)=>{
         reply.send({ hello: results })
       })
     })
   done()
}

export default userRoute