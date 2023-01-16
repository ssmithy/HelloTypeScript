interface Product{
    id: number,
    name: string,
    price: number
}

function getProduct(id) : Product{
    return { 
        id: id,
        name: `awesome gadget ${id}`,
        price: 99.5
    }
}

//these errors are appearing because of the corrosponding JS file
//  TODO: How to fix this??
//  Only happens when the file is open??
const product = getProduct(1);
console.log(`the product ${product.name} costs $${product.price}`);

//type is heading
const heading = document.querySelector('h1');

let counter: number = 1;
counter ++;
console.log(counter);

let names: string[] = ["shaun", "stacey", "lily", "bobby"];
console.log(names);

interface person {
    name: string,
    age: number
}

let people: person[] = [
    {
        name: "dave",
        age: 100
    }
]

console.log(people);

let greeting : (name: string) => string;
greeting = function (name: string){
    return `Hi ${name}`;
}

console.log(greeting("Shaun"));