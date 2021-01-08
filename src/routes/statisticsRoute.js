const express = require('express')
const router = express.Router()

const fetch = require('node-fetch')

router.get('/statistics',async(req,res)=>{
    res.render('statistics.ejs',{name: "Statistics | Covid-19 WebSite",err : false})
})

router.post('/statistics',async(req,res)=>{
    const country = req.body.country

    const data = await fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
            res.render('statistics.ejs',{name: "Statistics | Covid-19 WebSite",err : 'Invalid'})
        })
        
    if(data.message) res.render('statistics.ejs',{name: "Statistics | Covid-19 WebSite",err : data.message})
    else if(data.message !== (null || undefined || "")) res.render('country.ejs',{name:`${data.country} | Covid-19 WebSite`,data :data})
})

module.exports = router