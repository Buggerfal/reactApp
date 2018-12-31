import React from 'react';
import Btn from './Button';
import CircleSettings from './CircleSettings';

class Menu extends React.Component {
    render() {
        return (
            <section>
                <div className='menu'>
                    <Btn text={'CIRCLE'}/>
                    <Btn text={'RECT'}/>
                    <Btn text={'SPRITE'}/>
                </div>
                <div className='settings'>
                    {/* <Btn text={'Move'}/>
                    <Btn text={'Set color'}/>
                    <Btn text={'Change radius'}/>
                    <Btn text={'ADD'}/> */}

<CircleSettings></CircleSettings>
                </div>  
            </section>
        );
    }
}

export default Menu;
