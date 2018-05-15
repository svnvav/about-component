import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import About from './components/about.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<About list = {this.props.data.list}/>);
    }
}

window.createAboutComponent = function (data) {
    ReactDOM.render(<App data = {data} />, document.getElementById('container'));
};
