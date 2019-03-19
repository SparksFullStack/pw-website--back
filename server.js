// * Imports
const express = require('express');
const mysql = require('mysql');

// * Server Configuration
const port = process.env.PORT || 3001;
const server = express();
server.use(express.json());

const connect = mysql.createConnection({
    host: "",
    user: "",
    password: ""
})

// * Routes
server.get('/', (req, res) => res.send('The server is live!'));

// * Server Activation
server.listen(port, () => console.log(`The server is listening on port ${port}`));