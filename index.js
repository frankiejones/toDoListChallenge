const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/toDo');
mongoose.connect(`${process.env.URL}`, {useNewUrlParser: true,useUnifiedTopology: true,}); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.use('/', router);

app.listen(3000,() => { // localhost:5000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
});