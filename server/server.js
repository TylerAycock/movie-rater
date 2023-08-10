require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT
const { db } = require('./database')


const { User } = require('./controller/models/users')
const { Review } = require('./controller/models/reviews')

User.hasMany(Review)
Review.belongsTo(User)

const app = express()
app.use(express.json())
app.use(cors())



// require the controller file here
const { postReview ,addUser, logInUser } = require('./controller/controller')

//set up endpoints here 
app.post('/review', postReview)
app.post('/user', addUser)
app.post('/login', logInUser)


//database sync
db.sync()
    .then(() => {
        app.listen(port, () => console.log(`jamming on ${port} BROTHER`))
    })
    .catch(err => {
        console.log(err)
        console.log('error syncinc db')
    })
