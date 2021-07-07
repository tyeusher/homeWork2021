let pizzaPlace = 'Jones';
let numberOfToppings = 8;
//Print the variables and their types.
console.log(typeof pizzaPlace, typeof numberOfToppings)

//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.

console.log(`the ${pizzaPlace} currently has ${numberOfToppings} of topping`)


//if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.

if(numberOfToppings < 10){
  return "Quality not Quantity"
}else{
  if(numberOfToppings > 10){
    return "a whole lot of pizza"
  }
}
// print a; even numbers
for(let i = 0; i<=numberOfToppings; i+=2){
  console.log(i)
}
