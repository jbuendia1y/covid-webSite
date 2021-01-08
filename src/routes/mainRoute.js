const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
    res.render('index.ejs',{name : 'Covid-19 | WebSite'})
})

module.exports = router