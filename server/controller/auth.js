// const jwt = require('jsonwebtoken')


// //handler function that will be invoked when the request comes in 
// module.exports = {
//     createToken: async (req, res) => {
//         // console.log(req.body)
//         let token = generateToken(req.body)
//         console.log(token)
//         res.status(200).send(token)
//     },
//     validateToken: async (req, res) => {
//         let token = req.get('Authorization')
//         let valid = jwt.verify(token, SECRET)
//         valid ? res.status(200).send('token successfully found') :
//             res.status(401).send('Invalid token')
//     }
// }

