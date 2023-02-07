//ver multer para subir imagenes
//instalo express-handlebars con npm i express-handlebars

import express from "express"
import routerProd from './routes/product.js'
import __dirname from './path.js'
import multer from 'multer'
import {engine} from 'express-handlebars'
import { appendFile } from "fs"
// import {create} from 'express-handlebars' server mas complejos

const upload = multer({storage: storage})
const app = express()
const PORT = 4000

//middlewares

app.use(express.json())
app.use(express.urlencoded({extended: true}))   
app.engine("handlebars", engine()) //config de hbs
app.set("view engine", "handlebars") // defino mis vistas
app.set("views", path.resolve(__dirname, "./views")) //`${__dirname}/views`

//routes
app.use('/static', express.static(__dirname + '/public'))
app.use('/api/product', routerProd)

app.get('/static', (req,res) => {

    const user = {
        nombre: "seba",
        email: "seba@eeee.com",
        rol: "tutor"
    }

    const cursos = [
        {numComision: 44555, dias: "Lunes y Miercoles", horario: '20 a 21hrs'},
        {numComision: 43555, dias: "Martes y jueves", horario: '19 a 22hrs'}
    ]

    res.render("home", {
        titulo: "Coder",
        mensaje: "Mundo",
        isTutor: user.rol === "tutor", //me tira un booleano true o false
        user: user,
        cursos
    }) //render renderiza html
})

app.post('/upload', upload.single('product'), (req,res) => {
    console.log(req.file)
    console.log(req.body)
    res.send("imagen cargada")
})

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`)
})