let pizzaToppings = ['mango', 'pepp', 'chicken', 'ralo'];
let avail = [];

const greetCustomer = () =>{
    for(let i =0; i<pizzaToppings.length; i++){
        avail.push(pizzaToppings[i])

       
    }
    console.log(`welcome our toppings are ${avail}`)
}

greetCustomer()

const getPizzaOrder =(size, crust, ...toppings) =>{
    console.log(`one ${size} ${crust} with ${toppings}`)
}
getPizzaOrder('medium', 'tough', 'mango', 'ralo');

let pizza={

}

let pizzaOrder={
    size: 'medium',
    crust: 'tough',
    toppings: ['mango', 'ralo']
}


const preparePizza = (arr) =>{

console.log(`cooking pizza ${arr.size} ${arr.crust} with ${arr.toppings}`)
    console.log(arr)
}

preparePizza(pizzaOrder);

const servePizza = (pizzaObject) =>{
console.log(`Order up here is your ${pizzaObject.size} ${pizzaObject.crust} with the toppings of ${pizzaObject.toppings}`)
}

servePizza(pizzaOrder)