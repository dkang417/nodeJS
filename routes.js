const express = require('express');
const request = require('request');

const typecodeUrl = 'https://jsonplaceholder.typicode.com/posts';
const questions = require('./models/questions');


const appRouter = (app) => {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.static(__dirname + "/static"));

    // home page serves static index file
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/static/index.html");
    })
    
    app.get('/posts', (req, res) => {
        request(typecodeUrl,  (err, response, body) => {
            if (err) {
                console.log('err:', error);
            } else {
                const items = JSON.parse(body);
                res.render('posts', { items:items });
            }
        }); 
    })

    app.get('/aboutme/description', (req, res) => {
        res.json(questions[0].answer);   
    })

    app.get('/aboutme/tech', (req, res) => {
        res.json(questions[1].answer);
    })

    app.get('/aboutme/techstack', (req, res) => {
        res.json(questions[2].answer);
    })
    
    app.get('/aboutme/hobbies', (req, res) => {
        res.json(questions[3].answer);  
    })

    app.get('/aboutme', (req, res) => {
        res.json(questions); 
    })
   
    app.all('*', (req, res) => {
        res.status(404).send('Not Found');
    })
}

module.exports = appRouter;
