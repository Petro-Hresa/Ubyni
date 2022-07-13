const  router = require('express').Router()

router.post('/registration', (req ,res) =>{
  console.log("Work", req.body); 
})





module.exports = router