const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello App');
});

app.listen(3000, () => {
    console.log('App is listening on port 3000!');
});
