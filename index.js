

const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;



var BASE_API_PATH = "/api/v1";

var contacts = [ 

    {"name" : "peter", "phone": 12345 }, 

    {"name" : "john", "phone": 6789} 

]; 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(BASE_API_PATH + "/contacts", (req,res) =>{
    console.log(Date() + " - GET /contacts");
    res.send(contacts)
});

app.post(BASE_API_PATH + "/contacts", (req,res) =>{
    console.log(Date() + " - POST /contacts");
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
