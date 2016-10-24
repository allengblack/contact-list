var express = require('express');
var app     = express();

app.use(express.static(__dirname + "/static"));

app.get('/contactlist', function (request, response) {
    console.log('GET request received!');

    var person1 = {
        name: 'Michael',
        email: 'mykehell123@gmail.com',
        number: '+234 703 45456',
        comment: 'A slightly gay guy.'
    };

    var person2 = {
        name: 'Seun',
        email: 'seyn@gmail.com',
        number: '+234 703 56789',
        comment: 'A slightly less gay guy than Mike.'
    };

    var person3 = {
        name: 'Uche',
        email: 'ucheu@gmail.com',
        number: '+234 703 34525',
        comment: 'A slightly hairy gay guy.'
    };

    var people = [person1, person2, person3];
    response.json(people);

});


app.listen(3000);
console .log('Server running on port 3000');

// app.listen(3000, '/contactlist');
// console .log('contact shit');