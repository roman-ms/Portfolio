import React, { useEffect, useState } from 'react';

/* Used to navigate to other parts of the page */
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')

  return (
    /* For class properties check TAILWIND documentation */
    /* styles.padding press Commmand to go to .padding section */
    <nav className={'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" /*points to the top of the page*/
          classname="flex items-center gap-2"
          onClick={() => { /* () => is a callback function to handle click */
            setActive(""); /* Keeps track of where we are on the page*/
            window.scrollTo(0, 0);
          }}>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className='text-white text-[18px] font-bold cursor-pointer'>Roman Meshkov</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar