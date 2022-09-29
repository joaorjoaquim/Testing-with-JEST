const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send({
        author: 'Dev',
        message: 'Testing Jest and Supertest'
    })
})


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})

module.exports = app