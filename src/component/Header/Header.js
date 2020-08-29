import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
       <h1>Online Education</h1>
        <nav>
            <a href="/course">Course</a>
            <a href="/review">Course Review</a>
            <a href="/manage">Manage Course</a>
        </nav>
        
    </div>



    );
};

export default Header;