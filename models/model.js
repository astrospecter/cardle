const sql = require("./db.js");

// constructor
const Car = function(car) {
    this.name = car.name;
    this.make = car.make;
    this.model = car.model;
    this.country = car.country;
    this.cylinders = car.cylinders;
};
Car.findById = (id, result) => {
    sql.query(`SELECT * FROM carsdb WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found car: ", res[0]);
            result(null, res[0]);
            return;
        }
        // if not found car with the id
        result({kind: "not_found"}, null);
    });
};
// find by name
Car.findByName = (name, result) => {
    sql.query(`SELECT * FROM Car_Names WHERE model = ${name}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found car: ", res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

module.exports = Car;
