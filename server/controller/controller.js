const { Review } = require('./models/reviews')
const { User } = require('./models/users')

module.exports = {
    postReview: async (req, res) => {
        try {
            console.log(req.body)
            const { title, date, rating, review } = req.body
            await Review.create({title, date, rating, review })
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            console.log('error posting a NEW review')
            res.sendStatus(400)
        }
    }
}