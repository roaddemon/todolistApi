var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(),
    url = require('url')


// from top level path e.g. localhost:3000, this response will be sent
app.get('/', (request, response) => response.send('Hello World'));

app.use('/api', router);
router.get('/', (request, response) => {response.json({message: 'Hello, welcome to my server'})});
router.get('/stuff', (request, response)=> {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;

    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    response.json({message: myResponse});
});

// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));