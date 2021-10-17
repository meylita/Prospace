const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')
const morgan = require('morgan');
const cors = require('cors');
//Declare App
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

//default route for server
app.get('/', (req, res) => res.status(200).send({
    mesaage: "Server is running..."
}));

const WriteTextToFileAsync = async (contentToWrite) => {
    fs.writeFile('./src/assets/company.json', contentToWrite, (err) => {
    })
}

app.post('/write', async (req, res, next)=> {
    const requestContent = JSON.stringify(req.body);
    await WriteTextToFileAsync(requestContent)
})

//Add route for server
app.use((req, res, next) => res.status(404).send({
    message: "Could not find requested"
}));

app.listen(port, () => {
    console.log(port, 'port');
})