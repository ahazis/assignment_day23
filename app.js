const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Muhammad Azis')
  })

app.listen(port, () => {
    console.log(`Server Muhammad Azis menyala on port ${port}`)
  })