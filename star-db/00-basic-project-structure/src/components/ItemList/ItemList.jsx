import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './ItemList.css';
import Spinner from "../Spinner";

class ItemList extends Component {
    state = {
        itemList: null
    };

    constructor(props) {
        super(props);

        console.log(this.props.children)
        console.log('hello')
    }

    componentDidMount() {
        const {getData} = this.props;

        getData().then((itemList) => this.setState({itemList}));
    }

    onClick = e => {
        const {target} = e;

        if (target.tagName !== 'LI')
            return;

        this.props.onItemSelected(target.dataset.id);
    };

    render() {

        const {itemList} = this.state;

        if (!itemList)
            return <Spinner/>;

        return (
            <ul className="item-list list-group" onClick={this.onClick}>
                {this.state.itemList.map(({id, name}) => (
                    <li className="list-group-item" data-id={id} key={id}>{name}</li>
                ))}
            </ul>
    )
    }
}

export default ItemList;