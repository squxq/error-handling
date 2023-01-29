const ValidationError = require("../errors/ValidationError")

const router = require("express").Router()

const cats = [
  { id: 1, name: "Luna", age: 2 },
  { id: 2, name: "Scarlett", age: 3 },
  { id: 3, name: "Lucy", age: 5 },
]

router.get("/", (req, res) => {
  return res.send(cats)
})

router.post("/", async (req, res) => {
  const { name, age, id } = req.body

  if (typeof name !== "string" || name.length < 2)
    throw new ValidationError("Name should be longer than 2 characters", "name")

  const newCat = { name, age, id }
  cats.push(newCat)

  return res.send(newCat)
})

router.put("/:id", (req, res) => {
  const { age } = req.body
  const cat = cats.find((cat) => cat.id === parseInt(req.params.is))

  if (!cat) return res.status(404).send("No cat found!")

  cats.age = age
  return res.send(cat)
})

router.delete("/:id", (req, res) => {
  const catIndex = cats.findIndex((cat) => cat.id === parseInt(req.params.id))
  cats.splice(catIndex, 1)

  return res.status(204)
})

module.exports = router
