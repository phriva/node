const {getFullName,getProducyLabel} = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

(async function main(){
    console.log("Carrinho:");
    getFullName("408","Teclado");
    getFullName("508","Mouse");
    getProducyLabel("Mousepad")

    console.log(config.client);
    database.connectToDatabase("my-data");
})();