const express = require("express")
const app = express();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/Handlebars-StaticFiles/index.html")
})

app.use(express.static(__dirname + '/Handlebars-StaticFiles'))

app.set('port', process.env.PORT || 3000)

app.listen (app.get('port'), () =>{
    console.log(`Server is running port ${app.get('port')}`)
}
)