const express = require('express')
const app = express()
app.use(express.static('node_modules'))
app.use(express.static('public'))


app.listen(process.env.PORT || 3005, () => console.log('Example app listening on port 3005!'))