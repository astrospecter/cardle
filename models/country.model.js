const sql = require("./db.js");

// constructor
const Country = function(country) {
    this.name = country.name;
    this.continent = country.continent;
}