import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {

    function bookDelete() {
        
        fetch(`https://alex-kessinger-bookmain.herokuapp.com/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => { return response.json() })
        .catch(error => {console.log("Fetch error:" + error)})
    }

    return (
        <div className = "delete-wrapper">
            <Link onClick={bookDelete} to={'/deleted_book'} className="delete-wrapper-link">Delete</Link>
        </div>
    );
}
