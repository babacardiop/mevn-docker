const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017`, 
{useNewUrlParser: true})
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', require('./routes/user.route'))

app.use(express.static('public'))

const port = process.env.PORT | 8080
app.listen(port)