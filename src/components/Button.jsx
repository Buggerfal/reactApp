import React from 'react';
import { Button } from 'reactstrap';

class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.text;
        this.id = this.props.id
      }

    render() {
        return (
            <div id='this.id'>
                <Button color="danger">{this.text}</Button>
            </div>
        );
    }
}

export default Btn;
