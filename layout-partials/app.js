const express = require('express')
const hbs = require('hbs')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)      // hbs setup
app.set('view engine', 'hbs')               // hbs setup
hbs.registerPartials(`${__dirname}/views/partials`) // partials setup


app.get('/', (req, res) => res.render('index-page'))
app.get('/equipos', (req, res) => res.render('teams-page'))
app.get('/jugadores', (req, res) => {

    // Aquí llamaríamos a una API
    const dataFromApi = [
        {
            name: "Rusell",
            lastName: "Westbrook",
            team: "OKC",
            photo:
                "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg"
        },
        {
            name: "Kevin",
            lastName: "Durant",
            team: "GSW",
            photo:
                "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top"
        },
        {
            name: "Lebron",
            lastName: "James",
            team: "CLE",
            photo:
                "https://www.mundodeportivo.com/r/GODO/MD/p7/MasQueDeporte/Imagenes/2020/11/07/Recortada/img_cvila_20201106-185537_imagenes_md_otras_fuentes_no_archivables_lebron-kx2C-U49299073759b3D-980x554@MundoDeportivo-Web.jpg"
        },
        {
            name: "Emanuel",
            lastName: "Ginóbilli",
            team: "SAS",
            photo:
                "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg"
        },
        {
            name: "Kyrie",
            lastName: "Irving",
            team: "BOS",
            photo:
                "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf"
        }
    ]

    res.render('players-page', { players: dataFromApi })
})

app.listen(3000, () => console.log('Servidor levantado en puerto 3000'))