import React, {Component} from 'react';

import './PersonDetails.css';
import SwapiService from "../../services/SwapiService";

export default class PersonDetails extends Component {
    state = {
        personId: this.props.personId,
        person: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId)
            this.updatePerson();
    }

    componentDidMount() {
        this.updatePerson();
    }

    updatePerson = () => {
        const {personId} = this.props;

        if (!personId)
            return;

        SwapiService.getPerson(personId).then(person => this.setState({person}));
    };

    render() {
        if (!this.state.person)
            return (<span className="choose-character">Please, choose a character</span>);

        const {id, name, gender, birthYear, eyeColor} = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
