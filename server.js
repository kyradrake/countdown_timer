const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname+'/countdown.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
