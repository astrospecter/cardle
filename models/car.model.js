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
    sql.query(`SELECT id FROM Car_Names WHERE model = ${name}`, (err, res) => { // TODO: model = name might need to be name = name
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found car: ", res);
            result(null, res[0]);
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
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
}
Car.getNameById = (id, result) => {
    // TODO
    sql.query(`SELECT Descr FROM Car_Names WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found model: ", res);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
}
Car.getCountryById = (id, result) => {
    // TODO
    // This will be the country id, not the actual country by string
}
Car.getCylindersById = (id, result) => {
    // gets number of cylinders by id
    sql.query(`SELECT cylinders FROM Car_Details WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found year: ", res);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    })
}
Car.getYearById = (id, result) => {
    // gets year by car id
    sql.query(`SELECT year FROM Car_Details WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found year: ", res);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
}

module.exports = Car;
