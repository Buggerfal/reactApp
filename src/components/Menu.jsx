import React from 'react';
import Btn from './Button';

const buttonAddCircle = 'Add CIRCLE';
const buttonMove = 'MOVE';
const buttonChange = 'CHANGE';

class Menu extends React.Component {
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

export default Menu;
