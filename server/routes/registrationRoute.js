const  router = require('express').Router()
const connect = require('../database/database')

router.post('/registration', (req ,res) =>{
  let {fullName, email, login, password, confirmPassword } = req.body
  connect.query(`INSERT INTO userregistration (fullName, email, login, password, confirmPassword) VALUES ('${fullName}', '${email}', '${login}', '${password}', '${confirmPassword}')`)
  console.log("Work", ); 
})





module.exports = router