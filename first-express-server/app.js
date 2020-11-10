const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('El valor de la variable global __dirname es:', __dirname)
    res.sendFile(`${__dirname}/views/index-page.html`)
})

app.get('/gato-con-dentadura', (req, res) => {
    res.sendFile(`${__dirname}/views/cat-page.html`)
})


app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))