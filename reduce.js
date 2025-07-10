const cart = [
    {item: "Hershiee's" ,price: 450},//objects
    {item: "Lays" ,price: 50},
    {item: "Maggie" ,price: 160},
    {item: "Almonds" ,price: 650},
    {item: "Cashew" ,price: 350},
];
const total = cart.reduce((sum, product)=> sum + product.price, 0);
console.log("Total:", total);

//output will be: Total: 1660