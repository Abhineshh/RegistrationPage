const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.json());

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    console.log('ding');
    res.sendFile(__dirname + '/index.html');
})


app.post('/api/register', (req, res) => {
    console.log('dinfffffg');
    const postData = req.body;
    console.log('Received data:', postData);
    console.log(typeof(postData))
    fs.appendFile('data.txt', JSON.stringify(postData), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.json({ message: 'Data received successfully' });
});


app.listen(4500, () => {
    console.log('server running at 4500')
});