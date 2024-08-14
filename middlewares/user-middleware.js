const jwt = require("jsonwebtoken")

const userMiddleware = async (req, res, next) => {
  const userToken = req.header("Authorization")
  if (!userToken) {
    return res.status(400).json({ message: "Token Not Provided " })
  }
  else {
    try {
      const token = userToken.split(" ")[1]
      const validatUser = jwt.verify(token, process.env.SECURITY_KEY)
      req.user = validatUser
      next()
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: "Invalid Token" })
    }
  }
}

module.exports = userMiddleware