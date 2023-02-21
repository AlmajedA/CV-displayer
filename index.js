const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000


const app = express()
app.set('view engine', 'pug')

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(express.static(__dirname + '/public'));

// const resume = require('./public/js/Resume.js');
// const resuma = new resume()


app.get('/', async function (req, res) {
	res.render('test', { title: 'test'})
})


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))