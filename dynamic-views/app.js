const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)      // hbs setup
app.set('view engine', 'hbs')               // hbs setup

app.get('/', (req, res) => res.render('index-page'))
app.get('/detalles-convocatoria', (req, res) => {

    const dataFromDatabase = {
        info: {
            name: 'Ivan',
            lastName: 'García',
            street: 'Calle del delicioso',
            number: 22
        },
        campus: 'Madrid',
        date: 'Octubre 2020 <strong>(confirmada)</strong>',
        teacher: 'Germán Álvarez',
        amount: 6000,
        payment: false,
        subjects: ['HTML & CSS', 'JS', 'Express', 'React']
    }

    res.render('student-details', dataFromDatabase) // Segundo argumento opcional: OBJETO con datos
})

app.listen(3000, () => console.log('Servidor levantado en puerto 300'))