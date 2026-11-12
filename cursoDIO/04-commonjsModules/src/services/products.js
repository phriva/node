const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullName(codeId, productName){
    console.log("\n");
    console.log("Product: " +  codeId + "--" + productName);
}

async function getProducyLabel(productName){
    console.log("Product: " + productName);
}

module.exports = {
    getFullName,
    getProducyLabel,
    productType,
};