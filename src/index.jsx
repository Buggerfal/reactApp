import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { SketchPicker } from 'react-color';
import Btn from './components/Button';
import Picker from './components/ColorPicker';

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

class App extends React.Component {
    render() {
        return (
            <div>
                <ListMenu/>
            </div>
        );
    }
}

render (<App/>, document.getElementById('root'));
render (<Picker/>, document.getElementById('context'));