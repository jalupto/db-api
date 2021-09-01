require('dotenv').config();
const express = require("express");
const app = express();
const { sequelize } = require('./db');
const { User } = require('./models/User');

;(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Unable to connect to database:', error);
    }
})()

const port = 3000;
const post = require('./controllers/Posts');
app.use('/post', post);
const auth = require('./controllers/Auth');

app.use('/auth', auth);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});