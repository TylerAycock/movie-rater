const { Review } = require('./models/reviews')
const { User } = require('./models/users')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const generateToken = (info) => {
    return jwt.sign(
        {
            //info we want to store
            username: info.userName,
            password: info.password
        },
        SECRET,
        {
            expiresIn: `24 hours`
        }
    )
}

module.exports = {
    postReview: async (req, res) => {
        try {
            console.log(req.body)
            const { title, date, rating, review } = req.body
            await Review.create({ title, date, rating, review })
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            console.log('error posting a NEW review')
            res.sendStatus(400)
        }
    },
    addUser: async (req, res) => {
        const { userName } = req.body
        let foundUser = await User.findOne({ where: { username: userName } })

        if (foundUser) {
            return res.status(200).send('username already exists')
        }

        try {
            console.log("adding new user", req.body)
            // const salt = await bcrypt.genSalt() can also simply input the namnt of sale we want below
            const hashedPass = await bcrypt.hash(req.body.password, 10) //so instead of salt var you input a number
            await User.create({ username: userName, password: hashedPass })
            res.status(200).send('new user received!')
        }
        catch (err) {
            console.log(err)
            res.status(400).send('error adding new user')
        }
    },
    logInUser: async (req, res) => {
        const { userName, password } = req.body
        let foundUser = await User.findOne({ where: { username: userName } })
        // console.log(foundUser.username)
        if (foundUser === null) {
            return res.status(400).send('User not found')
        }
        try {
            if (await bcrypt.compare(password, foundUser.password)) {
                let token = generateToken(req.body)
                console.log('the controller token', token)
                res.status(200).send(token)

            } else {
                res.status(200).send('Password Incorrect')
            }
        } catch (error) {
            console.log('Error in loginUser')
            console.log(error)
            res.status(500).send('Unable to Login')
        }
    }
}

