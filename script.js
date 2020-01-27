"use strict";
class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static TOPPING_MAYO = {
        price: 10,
        calories: 5
    };
    static TOPPING_SAUCE =  {
        price: 15,
        calories: 3
    };
    constructor(burger) {
        this.burger = [burger];
    }
    add(burger) {
         return this.burger.push(burger);
    }
    calculatePrice(){
        let sumPrice = 0;
        for (let currentPrice of this.burger) {
            const {price} = currentPrice;
            sumPrice = sumPrice + price;
         }
         return sumPrice;
    }
    calculateCalories(){
        let sumCalories = 0;
        for (let currentCalories of this.burger) {
            const {calories} = currentCalories;
            sumCalories = sumCalories + calories;
         }
         return sumCalories;
    }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
console.log(hamburger);

hamburger.add(Hamburger.TOPPING_MAYO);
console.log(hamburger);

console.log("Total calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.add(Hamburger.TOPPING_SAUCE);
console.log(hamburger);
hamburger.calculatePrice();

console.log("Price with sause: " + hamburger.calculatePrice());
console.log("Total calories with sause: " + hamburger.calculateCalories());


