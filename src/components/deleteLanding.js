import React from 'react';
import { Link } from 'react-router-dom';

export default function() {


    return (
        <div className="app delete-landing-container">
            <div className="header">You deleted a book</div>

            <div className="delete-landing-link-wrapper">
                <Link to={'/'} className ="delete-wrapper-link">View All Books</Link>
            </div>
            

        </div>
    );
}
