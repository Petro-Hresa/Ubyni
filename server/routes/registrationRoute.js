const  router = require('express').Router()

router.post('/registration', (req ,res) =>{
  console.log("Work",res.body); 
})





module.exports = router