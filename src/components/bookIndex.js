import React, {Component} from 'react';
import DeleteAction from './deleteAction';
import { Link } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';


export default class BookIndex extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            books: [],
            isLoaded: true
        }
    }
    componentDidMount() {
        fetch("https://alex-kessinger-bookmain.herokuapp.com/books", {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {
            this.setState({
                books: data,
                isLoaded: false
            });
            
        })
        .catch(error => {
            console.log("Fetch error: " + error);
        })
    }

    render() {
        return (
                
            
            <div className = "list-books-wrapper">
                
                <div className="book-list-header header">LIST OF BOOKS</div>
                <LoadingOverlay
                    active={this.state.isLoaded}
                    spinner
                    text="Loading..."
                    fadeSpeed={200}
                    className='loader-bar'
                >
                {this.state.books.map((book) => (
                    <div key = {book[0]} className="book-container">
                        <div className="book-title-container">
                            <div className="title">
                                {book[1]}
                            </div>
                            <div className="author">
                                By: {book[2]}
                            </div>
                        </div>

                        <div className="book-list-link-container">
                            <div  className="delete-link-wrapper">
                                <DeleteAction id = {book[0]}/>
                            </div>
                            <div className="view-book-link-wrapper">
                                <Link to={`/view_book/${book[0]}`} className="view-book-link" props = {book}>VIEW BOOK</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </LoadingOverlay>
            </div>
                
            
        )
    }
}