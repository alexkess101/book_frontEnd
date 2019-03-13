import React, {Component} from 'react';
import { withRouter } from 'react-router';

class UpdateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            author: '',
            formHidden: true
        }
        this.editBook = this.editBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let id = this.state.id;
        let title = this.state.title;
        let author = this.state.author;
        
        fetch(`http://localhost:5000/update_book/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, author: author})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData;})
        .then(() => { this.props.history.push('/') })
        .catch(err => {console.log("Fetch error: " + err)})
    }

    editBook() {
        this.setState({
            id: this.props.ourProp[0],
            title: this.props.ourProp[1],
            author: this.props.ourProp[2],
            formHidden: !this.state.formHidden
        })
        
    }

    render() {
        return (
            <div>
                
                <button onClick={this.editBook}>Update this book</button>
                <form onSubmit={this.handleSubmit} style={{visibility: this.state.formHidden ? "hidden" : "visible"}}>
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" name= "title" value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Author</label>                
                        <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(UpdateBook);