const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://teamBilleBleue:camembert@localhost:27017/billebleue';

mongo.connect(url, (err) => {
    console.log('Connexion à la database!');
});

app.get('/data', (req, res) => {
    mongo.connect(url, (err, db)=>{
        const collection = db.collection('products');
        collection.find({}).toArray((x, hasil)=>{
            res.send(hasil);
        });
    });
});

app.listen(3210, () => {
  console.log('Server actif @port 3210!');
});
