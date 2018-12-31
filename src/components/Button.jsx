import React from 'react';
import { Button } from 'reactstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
//import NumericInput from 'react-numeric-input';

class Btn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0, disabled:false, showInput: true};
    
        this.handleTextChange = this.handleTextChange.bind(this);
        this.hanleButtonClick = this.hanleButtonClick.bind(this);
    }

    handleTextChange(event) {
        let val = parseInt(event.target.value);
        val = val || 0;
        this.setState({disabled: val === 0});
        this.setState({value: val});
    }

    hanleButtonClick(event) {
        this.setState({showInput: !this.state.showInput});
    }

    render() {
        console.log('btn');
        return (
            <div>
                <Button onClick={this.hanleButtonClick} color="danger" disabled={this.state.disabled}>{this.props.text}</Button>
                <br />
                {this.renerInput()}
                {/* <NumericInput min={0} max={10} value={this.state.value} change={this.handleTextChange} /> */}
                <Span text={this.state.value}></Span>
                <ReactBootstrapSlider value={this.state.value} change={this.handleTextChange}/>

            </div>
        );
    }

    renerInput() {
        return (this.state.showInput ?
            <input type="text" value={this.state.value} onChange={this.handleTextChange} />
            : null
        );

    }
}

export default Btn;


class Span extends React.Component {
    render() {
        console.log('Btn2');
        return (
            <div>
                <span>{this.props.text}</span>
            </div>
        );
    }
}