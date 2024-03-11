import React,  {useState} from 'react';
import { NavLink } from 'react-router-dom';


function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

        <NavLink to="/">Home</NavLink>

       <NavLink to="/Contact">contact</NavLink>

       <NavLink to="/Product5">Product</NavLink>

        </div>
    );
}

export default Header;