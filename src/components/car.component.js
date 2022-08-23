import React, { Component } from "react";

export default class CarObject extends Component {
    constructor(props) { // what is props?
        super(props);
        
        this.id;
        this.name = "";
        this.make = "";
        this.model = "";
        this.country = "";
        this.cylinders = 0;
        this.year = 0;
    }

    componentDidMount() {
        this.getCar(this.props.match.params.id); // TODO: ???
    }

    updateCarInfo(id) {
        // updates car details based on the id
    }

    getCountryName() {
        // get the name of the country
    }

    getContinentbyCountry() {
        // get the continent
    }

    getDetailsByName(name) {
    }
}