// quais ações meu carrinho pode fazer

//casos de uso
//adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

//calcular o total
async function calculateTotal(userCart){
    console.log("\nShopee Cart TOTAL IS:"); 
    console.log("Total ", userCart.reduce((total, item) => total + item.subtotal(), 0));
}

//deletar item do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}
//remover item
async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if (indexFound == -1){
        console.log("item nao encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}
// async function removeItem(userCart, index){
//     const deleteIndex = index - 1;
//     if(index >= 0 && index < userCart.length){
//         userCart.splice(deleteIndex, 1);
//     }
// }

async function displayCart(userCart) {
    console.log("\nShopee Cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};