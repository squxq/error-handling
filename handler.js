"use strict"
const app = require("./main")
const serverless = require("serverless-http")

module.exports.apiConnect = serverless(app)
