// here we get codes from 3rd party plugins/library
const express = require('express') // server code or to run our own server on localhost specified by port
const cors = require('cors') // this allows us to access our server on a different domain
const bodyParser = require("body-parser"); // this allows us to ready request data JSON object
const app = express() // initialize express server into a variable
const fs = require('fs') // use file system of windows or other OS to access local files
const port = 3005; //set custom port
const request = require('request');
const requestAPI = request;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mp2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('country', {
    username: {
        type: Sequelize.STRING
    },
    full_name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
},{
    tableName: 'user',
    timestamps: false,
});

const Joke = sequelize.define('joke',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
        
    },
    punchline: {
        type: Sequelize.STRING
    },
    setup:{
        type: Sequelize.STRING
    },
    type:{
        type: Sequelize.STRING
    }
}, {
    tableName: 'joke',
    timestamps: false,
});



let rawData = fs.readFileSync('data.json'); // read file from given path
let parsedData = JSON.parse(rawData); // parse rawData (which is a string into a JSON object)

app.use(cors()) // initialize cors plugin on express
app.use(bodyParser.urlencoded({ // initialize body parser plugin on express
    extended: true
}));
app.use(bodyParser.json());// initialize body parser plugin on express

let defaultData = [];
let jokeData = [];


app.post('/api/v2/login', function (
    request, 
    response
) {
    let retVal = {success: false};
    console.log('req: ', request.body)

    User.findOne({username: request.body.username})
        .then((result)=>{
            return result.dataValues;
        })
        .then((result)=>{
            if(result.password === request.body.password){
                retVal.success = true;
                delete result.password;
                retVal.userData = result;
                return true;
            }else{
                retVal.success = false;
                retVal.message = 'Invalid Password!'
                throw new Error('invalid password')
            }
        })
        .finally(()=>{
            response.send(retVal)
        })
        .catch((error)=>{
            console.log('error: ', error)
            // response.send(retVal)
        })
})

// insert joke
app.post('/api/v2/jokes', function(request, response){
    Joke.create(request.body)
    .then(joke => response.status(201).json({joke}))
    .catch(error => response.status(500).json({error}));
})

// get all jokes
app.get('/api/v2/jokes', function(request, response){
    Joke.findAll()
    .then(jokes => response.json({jokes}))
    .catch(error => response.status(500).json({error}));
})

// get one joke
app.get('/api/v2/jokes/:id', function(request, response){
    Joke.findByPk(request.params.id)
    .then(joke => {
        if(!joke){
            return response.status(404).json({ error: 'Joke not found' });
        }
        response.json({joke});
    })
    .catch(error => response.status(500).json({error}));
})


const runApp = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port) // run app with this given port
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
runApp()

