const express = require('express')
const router = express.Router()
const connect = require('../database/database')



router.get('/users', (req, res)=>{
   connect.query('SELECT * FROM users', (err, result, field)=>{
      res.json(result)
   })
})

module.exports = router