import React from 'react';
import {render} from 'react-dom';

const buttonMove = 'Move';
const styles = {color: 'red'};

class ListMenu extends React.Component {
    render() {
        return (
            <ul>
                <li>{ (new Date).toDateString()}</li>
                <li style={styles}>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        );
    }
}

class BackGround extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Hello!"/>
                <button> {buttonMove}
                </button>
            </div>
        );
    }
}

class MainMenu extends React.Component {
    render() {
        return (
            <div id='menu'>
                <button>{buttonMove}</button>
                <ListMenu/>
                <BackGround/>
            </div>
        );
    }
}

render (<MainMenu/>, document.getElementById('root'))