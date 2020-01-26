"use strict";
// SIZE_SMALL = 50;
// SIZE_MEDIUM = 75;
// SIZE_LARGE = 100;
// TOPPING_MAYO = //добавка из майонеза
// TOPPING_SAUCE = //еще приправу

class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static TOPPING_MAYO = {
        price: 10,
        calories: 5
    };
    constructor(price, calories) {
        this.calories = calories;
        this.price = price;
    }

}

Hamburger.prototype.add = function(price) { 
   let totalPrice = [this.price].concat([price])
    .map((item) => 0 + item.price)
    .reduce((acc, el) => acc + el);
    console.log('totalPrice', totalPrice);
    return totalPrice;
}


Hamburger.prototype.addCalories = function(calories) { 
    let totalCalories = [this.price].concat([calories])
      .map((item) => 0 + item.calories)
      .reduce((acc, el) => acc + el);
      console.log('totalCalories', totalCalories);
      return totalCalories;
  }

Hamburger.prototype.calculatePrice = function(totalPrice, totalCalories) {
    console.log('totalPrice', totalPrice);
    console.log('totalCalories', totalCalories);
    
   price = {price: totalPrice, calories: totalCalories}
    console.log('price', price);
    console.log('this.price', this.price);
    return totalPrice;
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
console.log(hamburger);
hamburger.add(Hamburger.TOPPING_MAYO);

hamburger.addCalories(Hamburger.TOPPING_MAYO);
console.log("Price: " + hamburger.calculatePrice());



