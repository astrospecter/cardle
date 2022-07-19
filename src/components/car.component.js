import React, { Component } from "react";
import Car from '../models/model.js';

export default class Car extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentCar: {
                id: null,
                make: "",
                model: "",
                country: "",
                cylinders: 0,
                year: 0
            }
        }
    }

    componentDidMount() {
        this.getCar(this.props.match.params.id); // TODO: ???
    }
}