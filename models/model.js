const sql = require("./db.js");

// constructor
const Car = function(car) {
    this.make = car.make;
    this.model = car.model;
    this.country = car.country;
    this.cylinders = car.cylinders;
    this.year = car.year;
};
// find by name
Car.findByName = (name, result) => {
    sql.query(`SELECT id FROM Car_Names WHERE model = ${name}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found car: ", res);
            return;
        }
        result({kind: "not_found"}, null);
    });
};
Car.getModelById = (id, result) => {
    sql.query(`SELECT Model FROM Car_Names WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found model: ", res);
            return;
        }
        result({kind: "not_found"}, null);
    });
}

module.exports = Car;
