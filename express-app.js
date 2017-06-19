const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');
const output = loremIpsum({
    units: 'paragraphs',
    format: 'html'
});

app.get('/lorem/:count', function(req, res) {
    let output = loremIpsum({
        count: req.params.count,
        units: 'paragraphs',
        format: 'html'
    })
    res.send(output);
})

app.listen(3000, function() {
    console.log('Successfully started express application!');
})