import React, { Component } from "react";
import Car from '../models/car.model.js';

export default class CarObject extends Component {
    constructor(props) { // what is props?
        super(props);
        
        this.id;
        this.make = "";
        this.model = "";
        this.country = 0; // this is the country id, country name will be given by the db
        this.cylinders = 0;
        this.year = 0;
    }

    componentDidMount() {
        this.getCar(this.props.match.params.id); // TODO: ???
    }

    updateCarInfo(id) {
        // updates car details based on the id
        this.make = Car.getModelById(id);
        this.model = Car.getNameById(id);
        this.country = Car.getCountryById(id);
        this.cylinders = Car.getCylindersById(id);
        this.year = Car.getYearById(id);
    }

    getCountryName() {
        // get the name of the country
    }

    getContinentbyCountry() {
        // get the continent
    }

    getDetailsByName(name) {
        id = Car.findByName(name);
        this.updateCarInfo(id);
    }
}