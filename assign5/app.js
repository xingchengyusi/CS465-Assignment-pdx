const express = require('express');
const app = express();

app.get('/submit', function(req, res, next) {
    let query = req.query;
    let name = query.name;
    let email = query.email;
    let comment = query.comment;
    let rep = '<p>name: ${name}</p>' + '<p>email: ${email}</p>' + '<p>comment: ${comment}</p>';
    res.send(rep);

    res.end();
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:8080/');
  });

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(3000, () => console.log('Example app listening on port 3000!'));