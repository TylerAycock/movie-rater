module.exports = {
    postReview: async (req, res) => {
        try {
            console.log(req.body)
            console.log('request recieved!')
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            console.log('error posting a review')
            res.sendStatus(400)
        }
    }

}