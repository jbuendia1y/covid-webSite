const express = require('express')
const router = express.Router()

const fetch = require('node-fetch')

const {API_NEWS_KEY} = process.env

router.get('/news',async (req,res)=>{
    const data = await fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=es&from=2020-05-01&topic=world&media=True',{
        method : 'GET',
        headers : {
            "x-rapidapi-key": API_NEWS_KEY,
            "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
            "useQueryString": true
        }
    })  .then(res => res.json())
        .then(data => data.articles)

    res.render('news.ejs',{name : 'NEWS | Covid-19 WebSite',data})
})

module.exports = router