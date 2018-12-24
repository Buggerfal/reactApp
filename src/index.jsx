import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const buttonAddCircle = 'Add CIRCLE';
const buttonMove = 'MOVE';
const buttonChangeRadius = 'CHANGE';

class ListMenu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <BtnAddCircle/>
                <BtnMove/>
                <BtnChange/>
            </div>  
        );
    }
}

class BtnAddCircle extends React.Component {
    render() {
        return (
            <div id='add_circle'>
                <Button color="danger">{buttonAddCircle}!</Button>
            </div>
        );
    }
}

class BtnMove extends React.Component {
    render() {
        return (
            <div id='move'>
                <Button color="danger">{buttonMove}!</Button>
            </div>
        );
    }
}

class BtnChange extends React.Component {
    render() {
        return (
            <div id='change'>
                <Button color="danger">{buttonChangeRadius}!</Button>
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

render (<MainMenu/>, document.getElementById('root'))