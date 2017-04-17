import React, { Component } from 'react'

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: props["data-city"]
        }
    }

    render() {
        return (
            <spam>{this.state.city}</spam>
        )
    }
}

export default City