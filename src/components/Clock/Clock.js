import React, { Component } from 'react'
import './Clock.css'
import City from '../City/City';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date(),
            date: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                <h2>Horário de <City data-city="Brasilia" />, são {this.state.time.toLocaleTimeString()} dia {this.state.date.toLocaleDateString()}</h2>
            </div>
        );
    }
}

export default Clock