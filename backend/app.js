const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const mongo = require('mongodb').MongoClient;
const url = 'mongodb://teamBilleBleue:camembert@localhost:27017/dojo';

mongo.connect(url, (err) => {
    console.log('Connexion à la database!');
});

app.get('/data', (req, res) => {
    mongo.connect(url, (err, db)=>{
        const collection = db.collection('billebleue');
        collection.find({}).toArray((x, hasil)=>{
            res.send(hasil);
        });
    });
});

app.post('/data', (req, res) => {
    mongo.connect(url, (err, db)=>{
    const collection = db.collection('products');
        const products = {
            name: req.body.name,
            num_agrement: req.body.num_agrement
        };
        collection.insert(products, (x, results)=>{
      res.send(results);
        });
    });
});

app.listen(3210, () => {
  console.log('Server actif @port 3210!');
});
