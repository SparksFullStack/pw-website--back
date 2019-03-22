// * Library Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// * Router Imports
const skinsRouter = require('./routes/skinsRoute');

// * Server Configuration
const port = process.env.PORT || 3001;
const server = express();

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
server.use('/skins', skinsRouter);

server.use(express.json());
server.use(cors());

// * Server Activation
server.listen(port, () => console.log(`The server is listening on port ${port}`));