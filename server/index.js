require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')

//controller file
const ctrl = require('./controller')

//env variables
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env 

//setting up app
const app = express();

//tlm
app.use(express.json())
app.use(cors())

//massive connection
massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('database connected! 👻')
    })
    .catch(error => {
        console.log(error)
    })

//end points
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)


app.listen(SERVER_PORT, () => {
    console.log('server running! 👾')
})