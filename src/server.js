const express = require('express')
const app = express()

const path = require('path')

//Config
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'views','pages'))
app.set('view engine','ejs')

//Middlewares
app.use(express.urlencoded({extended : true}))
app.use('/static',express.static(path.join(__dirname,'public')))

//Routes
app.use('/',require('./routes/mainRoute'))
app.use('/',require('./routes/statisticsRoute'))
app.use('/',require('./routes/newsRoute'))

module.exports = app