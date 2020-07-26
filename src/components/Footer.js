import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; UserBase {(new Date().getFullYear())} all rights reserved</p>
        </footer>
    )
}

export default Footer;