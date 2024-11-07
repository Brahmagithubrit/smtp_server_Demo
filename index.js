const express = require("express");
const axios = require("axios");
const { homeroute , sendmail} = require('./controllers/controller')

const app = express();

app.get('/' , homeroute);
app.get('/sendmail' , sendmail) ;

app.listen(5000, () => console.log("server is listening on 5000"));





