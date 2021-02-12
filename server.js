const path = require('path');
const express = require('express');
const app = express();

app.use('/assets', express.static(path.join(__dirname + '/assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

const listener = app.listen(process.env.port || 8080, () => {
    console.log(`App is listening on port ${listener.address().port}`);
});