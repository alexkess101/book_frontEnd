import React, {Component} from 'react';
import DeleteAction from './deleteAction';
import { Link } from 'react-router-dom';


export default class BookIndex extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:5000/books", {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({books: data});})
        .catch(error => {
            console.log("Fetch error: " + error);
        })
    }

    render() {
        return (
            <div>
                <h1>List of Books</h1>
                {this.state.books.map((book) => (
                    <div key = {book[0]}>
                        <h2>Book Title: {book[1]}</h2>
                        <h2>Book Author: {book[2]}</h2>
                        <DeleteAction id = {book[0]}/>
                        <Link to={`/view_book/${book[0]}`} props = {book}>View Book</Link>
                    </div>
                ))}
            </div>
        )
    }
}