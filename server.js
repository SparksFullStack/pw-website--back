// * Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// * Server Configuration
const port = process.env.PORT || 3001;
const server = express();
server.use(express.json());

// * DB Configurations
mongoose.promise = global.Promise;
const databaseOptions = { useNewUrlParser: true };
mongoose.set('useCreateIndex', true);

// * DB Connection
mongoose.connect(process.env.MLAB_URI, databaseOptions);
mongoose.connection
    .once('open', () => console.log('The database is connected'))
    .on('error', (err) => console.warn(err));

// * Routes
server.get('/', (req, res) => res.send('The server is live!'));

server.use(express.json());
server.use(cors());

// * Server Activation
server.listen(port, () => console.log(`The server is listening on port ${port}`));