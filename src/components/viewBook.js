import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DeleteAction from './deleteAction';

export default class viewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleBook: []
        }
    
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`http://localhost:5000/book/${id}`, {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({singleBook: data});})
        .catch(error => {
            console.log("Fetch error: " + error);
        })
    }

    render() {
        return (
            <div className="app">
                <h1>Book information</h1>
                <div>{this.state.singleBook[1]}</div>
                <div>{this.state.singleBook[2]}</div>
                <DeleteAction id={this.state.singleBook[0]} />
                {console.log(this.state.singleBook)}
            </div>
        )
    }
}