require('dotenv').config()

const Application = require('./app/server'); 
new Application(process.env.APPLICATION_PORT , process.env.DB_URI)