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
        fetch("https://alex-kessinger-bookmain.herokuapp.com/input", {
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
            <div>
                <h1>Add book below</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Title</label>
                    <input type="text" name="title" value= {this.state.title} onChange={this.handleChange} />
                    <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}