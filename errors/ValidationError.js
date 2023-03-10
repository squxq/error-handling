const CustomError = require("./CustomError")

class ValidationError extends CustomError {
  constructor(message, property) {
    super(message)
    this.property = property

    this.errorCode = 400
    this.errorType = "VALIDATION_ERROR"

    Object.setPrototypeOf(this, ValidationError.prototype)
  }
  setErrors() {
    const errorObj = super.serializeErrors(
      this.errorType,
      this.errorCode,
      this.property
    )
    errorObj[0].property = this.property
    return errorObj
  }
}

module.exports = ValidationError
