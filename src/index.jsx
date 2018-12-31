import React from 'react';
import {render} from 'react-dom';
import Menu from './components/Menu';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import './css/style.css';

class App extends React.Component {
    render() {
        return (
            <div>

                <Menu/>
            </div>
        );
    }
}

render (<App/>, document.getElementById('root'));
// render (<Picker/>, document.getElementById('context'));