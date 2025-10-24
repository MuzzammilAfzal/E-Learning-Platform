const express = require('express')
const app = express()
const port = 3000
const userRouter=require("./router/user")

app.use(express.json());
app.use('/user',userRouter) 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
