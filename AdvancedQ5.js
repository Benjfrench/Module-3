// The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works
// setTimeout(car.description, 200); //fails

//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(function() {
    car.description();
}, 200);

//b) Change the year for the car by creating a clone of the original and overriding it

