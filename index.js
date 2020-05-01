const express = require('express');

const App = express();

App.get('/projects', (request, response) => {
    return response.json({message : "Hello World"})
});

App.listen(3033, err => console.log('Servidor ok'));