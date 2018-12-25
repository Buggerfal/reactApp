import React from 'react';
import {render} from 'react-dom';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Picker from './components/ColorPicker';
import Menu from './components/Menu';

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
render (<Picker/>, document.getElementById('context'));