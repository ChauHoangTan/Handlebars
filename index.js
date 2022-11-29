const express = require("express")
const app = express();


const expressHbs = require('express-handlebars')

app.engine('hbs',expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout : 'layout',
    extname : 'hbs'
}))

app.set('view engine', 'hbs')


app.use(express.static(__dirname + '/Handlebars-StaticFiles'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/task1', (req, res) => {
    res.render('task1');
})

app.get('/task2', (req, res) => {
    res.render('task2');
})

app.use('/task3', require('./routes/task3Route'))

app.get('/task4', (req, res) => {
    res.render('task4');
})

app.set('port', process.env.PORT || 3000)

app.listen (app.get('port'), () =>{
    console.log(`Server is running port ${app.get('port')}`)
}
)