const express = require('express');

const app = express();

app.get('/api/execute', (req, res) => {
    console.log(req);
    return res.status(200).end();
});

app.listen(8080, () => console.log('Listening'));