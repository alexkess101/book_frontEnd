import React from 'react';
import { Link } from 'react-router-dom';

export default function() {


    return (
        <div>
            <h1>You deleted a book</h1>

            <Link to={'/'}>View All Books</Link>
            

        </div>
    );
}
