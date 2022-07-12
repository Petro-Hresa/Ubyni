const  expressRouter = require('express').Router()


expressRouter.post('/api/registration', (req ,res) =>{
  console.log("Work",res.body); 
})





module.exports = expressRouter