import React from 'react';
import { SketchPicker } from 'react-color';

class Picker extends React.Component {
    render() {
        return (
            <div id='picker'>
                <SketchPicker />
            </div>
        );
    }
}

export default Picker;
