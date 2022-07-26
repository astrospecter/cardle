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
    sql.query(`SELECT Model FROM Car_Names WHERE id = ${id}`, (err, res1) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        else if (res1.length) {
            console.log("Car.getCountryById part 1 success: ", res1);
        }
        else {
            result({kind: "not_found"}, null);
            return;
        }
    });
    sql.query(`SELECT Maker FROM Model_Details WHERE Model = ${res1[0]}`, (err, res2) => {
        if (err) {
            console.log("error: ", null);
            result(err, null);
            return;
        }
        else if (res2.length) {
            console.log("Car.getCountryById part 2 success: ", res2);
        }
        else {
            result({kind: "not_found"}, null);
            return;
        }
    });
    sql.query(`SELECT Country FROM Car_Makers WHERE Maker = ${res2[0]}`, (err, res3) => {
        if (err) {
            console.log("error; ", null);
            result(err, null);
            return;
        }
        if (res3.length) {
            console.log("Country ID found: ", res3);
            result(null, res3[0]);
            return;
        }
        result({kind: "not_found"}, null);
    })
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
Car.getAllCarNamesById = (id, result) => {
    // combine all info into as few queries as possible
    sql.query(`SELECT Model, Descr FROM Car_Names WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found: ", res);
            result(null, res);
            return;
        }
        result({kind: "not_found"}, null);
    });
}
Car.getAllDetailsById = (id, result) => {
    // combine all info into as few queries as possible
    sql.query(`SELECT cylinders, year FROM Car_Details WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found: ", res);
            result(null, res);
            return;
        }
        result({kind: "not_found"}, null);
    });
}

module.exports = Car;
