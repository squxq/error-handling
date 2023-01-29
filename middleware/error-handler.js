const CustomError = require("../errors/CustomError")

const errorHandler = (err, req, res, next) => {
  //   res.send("some error occurred")
  if (err instanceof CustomError) {
    return res.json({ errors: err.setErrors() })
  }
  res.json({ errors: [{ message: "Some error occurred" }] })
}
module.exports = errorHandler
