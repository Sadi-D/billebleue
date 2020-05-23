import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";


const stitchClient = Stitch.initializeDefaultAppClient("billebleue-qwkxh");

const mongodb = stitchClient.getServiceClient(
        RemoteMongoClient.factory,
        'mongodb-atlas'
    );
    // Get a hook to the employees collection
    const products = mongodb.db('billebleue').collection('products');

displayProducts() {
    this.db
        .collection("products")
        .asArray()
        .then(product => {
            this.setState({
                product
            });
        });
}


// Renders the the employees' information in the table
function displayProducts(products) {
    const productsTableBody = document.getElementById("products");
    const numResultsEl = document.getElementById("num-results");
    const tableRows = products.map(product => {
        return `
      <tr>
        <td>${product.name}</td>
        <td>${product.num_agrement}</td>
        <td>${product.label}</td>
        <td>${product.date_collecte}</td>
      </tr>
    `;
    });
    productsTableBody.innerHTML = tableRows.join("");
    numResultsEl.innerHTML = products.length;
}
