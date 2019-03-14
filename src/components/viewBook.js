import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import DeleteAction from './deleteAction';
import UpdateBook from './updateBook';

export default class viewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleBook: []
        }
    
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`https://alex-kessinger-bookmain.herokuapp.com/book/${id}`, {
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
            <div className="view-book-wrapper">
            <div className="header">Book information</div>
                <div className="view-book-container">
                    <div className="left-side">
                        <div className="title">{this.state.singleBook[1]}</div>
                        <div className ="title">By: {this.state.singleBook[2]}</div>
                        <div>
                            <UpdateBook ourProp={this.state.singleBook}/>
                        </div>
                    </div>
                    <div className="right-side">
                        <DeleteAction id={this.state.singleBook[0]}/>
                    </div>
                </div>
            </div>
        )
    }
}