import React, { Component } from 'react'
import './Author.css'

class Author extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {
                firstName: 'Thiago',
                lastName: 'Oliveira'
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h5 className="author">Criado por {this.state.author.firstName} {this.state.author.lastName}.</h5>
            </div>
            
        )
    }
}

export default Author


