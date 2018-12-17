import React from 'react';
import {render} from 'react-dom';

const buttonMove = 'Move';
const styles = {color: 'red'};
function Menus(){
    return (
        <ul>
            <li>{ (new Date).toDateString()}</li>
            <li style={styles}>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    ) 
}

function HelloWorld() {
    return (
        <container id='menu'>
            <button>{buttonMove}</button>
            <Menus/>
        </container>
    )
}

render (<HelloWorld/>, document.getElementById('root'))