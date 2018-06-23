import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './js/components/App';



class Layout extends React.Component {
    render() {
        return (
            <App />
        ) 
    }
}

const calculator = document.getElementById('root');

ReactDOM.render(<Layout />, calculator);