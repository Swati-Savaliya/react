import React from 'react';
import { NavLink } from 'react-router-dom';

function Contact(props) {
    return (
        <div>
                <h2> Contact Page </h2>
                <button> <NavLink to="/contact">  Call or Mail us </NavLink></button>
                <button> Drop a Letter </button>
        </div>
    );
}

export default Contact;