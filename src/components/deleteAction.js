import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {

    function bookDelete() {
        
        fetch(`http://localhost:5000/delete/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => { return response.json() })
        .catch(error => {console.log("Fetch error:" + error)})
    }

    return (
        <div>
            <Link onClick={bookDelete} to={'/deleted_book'} >Delete</Link>
            

        </div>
    );
}
