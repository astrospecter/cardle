const sql = require("./db.js");

// constructor
const Car = function(car) {
    this.name = car.name;
    this.make = car.make;
    this.model = car.model;
    this.country = car.country;
    this.cylinders = car.cylinders;
};
