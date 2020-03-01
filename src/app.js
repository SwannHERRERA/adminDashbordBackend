require('dotenv').config()
const express = require('express')
const port = process.env.PORT
const userRoutes = require('./routers/user')
require('./db/db')

const app = express()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use('/user', userRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
