import React, { useEffect, useState } from 'react';

/* Used to navigate to other parts of the page */
import { link } from 'react-router-dom';

import { styles } from '../styles';
import { navlinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = userState('')

  return (
    /* For class properties check TAILWIND documentation */
    /* styles.padding press Commmand to go to .padding section */
    <nav className={'${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <link 
          to="/" /*points to the top of the page*/
          classname="flex items-center gap-2"
          onClick={() => { /* () => is a callback function to handle click */
            setActive(""); /* Keeps track of where we are on the page */
            window.scrollTo(0, 0); /* Scroll to the top of the page */
          }}>
            <img src={logo} alt="logo" classname= "w-9 h-9 object-contain" />
        </link>
      </div>
    </nav>
  )
}

export default Navbar