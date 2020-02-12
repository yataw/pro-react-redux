import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import FakeButton from '../FakeButton/FakeButton';
import ErrorSimple from "../ErrorSimple";

import SwapiService from '../../services/SwapiService';



class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError)
            return (<ErrorSimple />);

        return this.props.children;
    }
}


class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return (
            <ErrorBoundary>
                <Header/>
                <RandomPlanet showRandomPlanet/>

                <FakeButton />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={SwapiService.getAllPeople}
                        >
                            {() => console.log('hello')}
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </ErrorBoundary>
        )
    }
}

export default App;