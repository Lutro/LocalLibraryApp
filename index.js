//Load express module
const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//listen for request on port 8000, and as a callback function have the port listened on logged
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
