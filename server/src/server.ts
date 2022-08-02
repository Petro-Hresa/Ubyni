 import fastify from "fastify";
import userRoute from "./modules/user/user.route";
 
const app = fastify({
  logger: true
})

const start = async () => {
 
  try{
    const port = await app.listen({ port: 8000 })
    console.log(`server start at ${port}`);
    
  }catch(e){
    app.log.error(e)
    process.exit(1)
  }

}
start()

app.register(userRoute , {prefix: '/api/'} )
