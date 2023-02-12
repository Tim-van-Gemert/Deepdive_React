import React from 'react';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <ul className='flex justify-center items-center'>
            <li className='p-[5px]'>
                <Link to='/'>Home</Link>
            </li>    
            <li className='p-[5px]'>
                <Link to='/about'>About</Link>
            </li>    
        </ul>
    );
}

export default NavBar;