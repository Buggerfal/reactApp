import React from 'react';
import Btn from './Button';

class Menu extends React.Component {
    render() {
        return (
            <section>
                <div className='menu'>
                    <Btn text={'CIRCLE'} id='btn_circle'/>
                    <Btn text={'RECT'} id='btn_rect'/>
                    <Btn text={'SPRITE'} id='btn_sprite'/>
                </div>
                <div className='settings'>
                    <Btn text={'Move'} id='btn_move'/>
                    <Btn text={'Set color'} id='btn_set_color'/>
                    <Btn text={'Change radius'} id='btn_radius'/>
                    <Btn text={'ADD'} id='btn_add'/>
                </div>  
            </section>
        );
    }
}

export default Menu;
