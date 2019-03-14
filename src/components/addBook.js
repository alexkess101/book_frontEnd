import React, {Component} from 'react';


export default class addBook extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: '',
            author: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(event) {
        let title = this.state.title;
        let author = this.state.author;
        fetch("http://localhost:5000/book/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: title, author: author})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData;})
        .then(() => {this.props.history.push('/');})
        .catch(error => {
            console.log("Fetch error: " + error);
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="app">
                <div className="add-book-container">
                    <div className="header">ADD BOOK BELOW</div>
                    <form onSubmit={this.handleSubmit} className ="add-book-form-container">
                        <label className="form-title">Title</label>
                        <div>
                            <input type="text" name="title" value= {this.state.title} onChange={this.handleChange} className="text-form" />
                        </div>
                        
                        <label className ="form-title">Author</label>

                        <div>
                            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} className="text-form"/>
                        </div>

                        <div className="space-20"></div>
                        <div className="button-wrapper">
                            <input type="submit" value="Submit" className="button"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}