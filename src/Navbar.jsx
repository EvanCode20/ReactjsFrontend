import React from 'react';
import "./Navbar.css"


export const Navbar = (props) => {
   return( 
    <nav className='nav'>
        <a className='site-title' onClick={() => props.onComponentSwitch('bulletin')}>Bulletin Board</a>
        <ul>
            <li>
                <a onClick={() => props.onComponentSwitch('createPost')}>Create Post</a>
            </li> 
        </ul>
    </nav>)
}

export default Navbar;