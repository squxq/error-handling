require("express-async-errors")

const express = require("express")
const catsRouter = require("./routes/cats")
const errorHandler = require("./middleware/error-handler")
const tryCatch = require("./utils/tryCatch")

const app = express()
app.use(express.json())
app.use("/cats", catsRouter)

const getUser = () => undefined

// another course - this tryCatch function eliminates the need for trycatch - but also, there is a module called express-async-errors that does this as well
app.get(
  "/test",
  tryCatch(async (req, res) => {
    const user = getUser()
    if (!user) throw new Error("User not found...")
    return res.status(200).send("OK")
  })
)

app.use("*", errorHandler)

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`)
})
