// const jwt = require('jsonwebtoken')
// const SECRET = process.env.SECRET

// const generateToken = (info) => {
//     return jwt.sign(
//         {
//             //info we want to store
//             username: info.userName,
//             password: info.password
//         },
//         SECRET,
//         {
//             expiresIn: `24 hours`
//         }
//     )
// }

// //handler function that will be invoked when the request comes in 
// module.exports = {
//     createToken: async (req, res) => {
//         console.log( 'token data' , req )
//         let token = generateToken(req)
//         console.log('the token', token)
//         // res.status(200).send(token)
//         return token
//     },
//     validateToken: async (req, res) => {
//         let token = req.get('Authorization')
//         let valid = jwt.verify(token, SECRET)
//         valid ? res.status(200).send('token successfully found') :
//             res.status(401).send('Invalid token')
//     }
// }

