// This is where im adding all my dependencies to the project
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const {getHomePage} = require('./routes/index');
const {addTaskPage, addTask} = require('./routes/task');
//Setting the port on which the server will run
const port = 5000;

// Connecting to DB
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp'
});
global.db = db;

// Setting up ejs
app.set('port', process.env.port || port); // using the port for server as defined above
app.set('views', __dirname + '/views'); // setting express to use views from here
app.set('view engine', 'ejs'); // configure ejs
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); // converts json to string
// below is for image uploads (havent included public/imgs folder so it wont work)
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(fileUpload());

app.get('/', getHomePage);
app.get('/add', addTaskPage);
app.post('/add', addTask);
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})