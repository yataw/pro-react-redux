import React, {Component} from 'react';

class FakeButton extends Component {

    state = {
        errorFlag: false
    };

    onClick = () => {
        this.setState({errorFlag: true});
    };

    render() {
        if (this.state.errorFlag)
            throw new Error();

        return (
            <div>
                <button onClick={this.onClick}>Error button</button>
            </div>
        );
    }
}

export default FakeButton;