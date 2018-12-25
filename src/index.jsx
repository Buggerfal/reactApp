import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { SketchPicker } from 'react-color';
import Btn from './components/Button';

const buttonAddCircle = 'Add CIRCLE';
const buttonMove = 'MOVE';
const buttonChange = 'CHANGE';

class ListMenu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <Btn text={buttonAddCircle} id='add_circle'/>
                <Btn text={buttonMove} id='move'/>
                <Btn text={buttonChange} id='change'/>
            </div>  
        );
    }
}

class Picker extends React.Component {
    render() {
        return (
            <div id='picker'>
                <SketchPicker />
            </div>
        );
    }
}

class MainMenu extends React.Component {
    render() {
        return (
            <div>
                <ListMenu/>
            </div>
        );
    }
}

render (<MainMenu/>, document.getElementById('root'));
// render (<Picker/>, document.getElementById('context'));
