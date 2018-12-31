import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
//import NumericInput from 'react-numeric-input';

const BUTTONS = [
    {
        name: 'add',
        slider: false
    },
    {
        name: 'remove',
        slider: false
    },
    {
        name: 'color',
        slider: false
    },
    {
        name: 'radius',
        slider: true
    },
]


class CircleSettings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeButtonName: null
        };
    
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(name) {
        this.setState({activeButtonName: name})
    }

    renderButton = (button) => 
        <Button
                key={button.name}
                onClick={this.handleButtonClick.bind(null, button.name)} 
                color="danger" 
                disabled={this.state.activeButtonName && button.name !== this.state.activeButtonName}
        >
            {button.name}
        </Button>
    

    renderButtonWithSlider = (button) => 
        <Fragment key={button.name}>
            <Button
                
                onClick={this.handleButtonClick.bind(null, button.name)} 
                color="danger" 
                disabled={this.state.activeButtonName && button.name !== this.state.activeButtonName}
                >
                {button.name}
            </Button>
            <ReactBootstrapSlider 
                value={1} 
                change={null}
                disabled={button.name !== this.state.activeButtonName ? 'disabled' : ''}
            />
        </Fragment>
    

    render() {
        return (
            <div>
                <h1>Circle</h1>
                {BUTTONS.map(button =>
                    button.slider
                        ? this.renderButtonWithSlider(button)
                        : this.renderButton(button)
                )}
                <Button
                    onClick={this.handleButtonClick.bind(null, null)} 
                    color="primary" 
                >
                    OK
                </Button>
            </div>
        );
    }
}

export default CircleSettings;
