const cart = [
    {item: "Hershiee's" ,price: 450},//objects
    {item: "Lays" ,price: 50},
    {items: "Maggie" ,price: 160},
    {items: "Almonds" ,price: 650},
    {items: "Cashew" ,price: 350},
];
const total = cart.reduce((sum, product)=> sum + product.price, 0);
console.log("Total:", total);

//output will be: Total: 1660