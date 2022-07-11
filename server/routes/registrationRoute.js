const  expressRouter = require('express').Router()


expressRouter.get('/api/registration', (req ,res) =>{
  console.log("Work",res.body); 
})





module.exports = expressRouter