const express = require('express');
const port = 3000;
const app = express();


app.get('/', (req, res)=>{
    console.log('hello.... ');
    return res.send('welcome');
});

// es5, es6, es10

// const, let

// () => {}

// function add (){

// }

app.get('/welcome', function (req, res){
    console.log('Node.js steps.... ');
    const x = 100+200;
    return res.status(200).send({x});
});

// 200, 201, 404, 304, 400, 405 

app.listen(port, function (){
    console.log('server listening on port.... : ', port);
});
