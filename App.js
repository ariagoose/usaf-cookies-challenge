const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/hello', function(req, res) {

console.log(JSON.stringify(req.cookies));
  if (req.cookies.name !== undefined){
    let cookie = req.cookies.name;
    res.send('Welcome ' + cookie + "!");
  } else{
    res.send("Welcome new user!");
  }
})

app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies)
  })
  

app.post('/login', (req, res) => {
    let cookie = req.body
    res.cookie("name", cookie.name);

    res.end();
  })


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))