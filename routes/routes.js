const express = require('express')
const router = express.Router()
const sequelize = require('/Users/Lenovo/Desktop/JUAN DIEGO/CODING/APPHYT/models/dbModels')



router.get('/',(req,res)=>{
  res.render('login')
})


module.exports = router