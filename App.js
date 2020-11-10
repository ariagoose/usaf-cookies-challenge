const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/hello', function(req, res) {

console.log(JSON.stringify(req.cookies));
  if (req.cookies){
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
    res.cookie(cookie.name);

    res.end();
  })

// app.get('/users', (req, res) => res.send(users))

// app.get('/users/:id', (req, res) => {
//     res.send(users.find(person => person.id === parseInt(req.params.id)));
// })

// app.post('/users', (req, res) => {
//     /* POST user data using the request body */
//     let newUser = req.body;
//     users.push(newUser);
//     res.send(newUser);
// })

// app.get('/search', (req, res) => {
//     let nameArray = req.query.name.split(" ");
    
//     res.send(users.filter(person => ((person.name[0] === nameArray[0]) && (person.name[1] === nameArray[1]))));
// })

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))