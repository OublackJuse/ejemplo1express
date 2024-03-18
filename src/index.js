const express = require('express')
const app = express()
const port = 3000

app.get('/Hola', (req, res)=>{
    res.send('¡Hola Mundo! Soy Edu')
})

app.listen(port, ()=>{
  console.log('La aplicacion se esta ejecutando por el puerto'+port)
})
