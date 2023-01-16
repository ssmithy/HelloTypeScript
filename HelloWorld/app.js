function getProduct(id) {
    return {
        id: id,
        name: "awesome gadget ".concat(id),
        price: 99.5
    };
}
//these errors are appearing because of the corrosponding JS file
//  TODO: How to fix this??
//  Only happens when the file is open??
var product = getProduct(1);
console.log("the product ".concat(product.name, " costs $").concat(product.price));
//type is heading
var heading = document.querySelector('h1');
var counter = 1;
counter++;
console.log(counter);
var names = ["shaun", "stacey", "lily", "bobby"];
console.log(names);
var people = [
    {
        name: "dave",
        age: 100
    }
];
console.log(people);
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log(greeting("Shaun"));
