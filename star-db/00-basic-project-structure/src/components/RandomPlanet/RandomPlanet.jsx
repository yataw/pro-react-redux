import React, { Component } from 'react';

import './RandomPlanet.css';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorSimple from '../ErrorSimple';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        error: false,
    };
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 2500);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = e => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;

        SwapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !loading && !error;

        const errorMessage = error ? <ErrorSimple/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}


const PlanetView = ({planet}) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};