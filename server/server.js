require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

// require the controller file here
const {postReview} = require('./controller/controller')

//set up endpoints here 
app.post('/review', postReview)

app.listen(port , ()=>console.log(`jamming on ${port} BROTHER`))