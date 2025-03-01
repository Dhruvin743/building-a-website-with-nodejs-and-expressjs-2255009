const express = require('express')
const app = express()

const port = 3456

app.get('/', (req, res, next) => {
  res.send({ msg: 'helooo freom server...' })
})

app.listen(port, () => {
  console.log(`server started at ${port}`)
})
