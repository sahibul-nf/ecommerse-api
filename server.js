const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/route');
routes(app);

app.listen(port, () => {
    console.log(`Resfull API server Ecommerse App listening at http://localhost:${port}`)
});