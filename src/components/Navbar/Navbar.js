import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar(){

    const[mobileNav, setMobileNav] = useState(false);
    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    }
    const[firstSubMenuMobile, setFirstSubMenuMobile] = useState(false);
    const[secondSubMenuMobile, setSecondSubMenuMobile] = useState(false);


    useEffect(()=>{
        mobileNav ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [mobileNav])

    return (
        <header>
            <div id='logo'>
            <img src="/assets/images/logo.svg" alt='logo'/>
            </div>
            <nav>
                <ul>
                    <li className='nav-item nav'><a href='#'>Features <img className='downArrow' src='/assets/images/icon-arrow-down.svg'/><img className='upArrow' src='/assets/images/icon-arrow-up.svg'/></a>
                    <ul className='navContent'>
                        <li className='navItem'><a href='#'><img src='/assets/images/icon-todo.svg' alt='todo'/>Todo List</a></li>
                        <li className='navItem'><a href='#'><img src='/assets/images/icon-calendar.svg' alt='calendar'/>Calendar</a></li>
                        <li className='navItem'><a href='#'><img src='/assets/images/icon-reminders.svg' alt='reminders'/>Reminders</a></li>
                        <li className='navItem'><a href='#'><img src='/assets/images/icon-planning.svg' alt='planning'/>Planning</a></li>
                    </ul>
                    </li>
                    <li className='nav-item nav'><a href='#'>Company <img className='downArrow' src='/assets/images/icon-arrow-down.svg'/><img className='upArrow' src='/assets/images/icon-arrow-up.svg'/></a>
                    <ul className='navContent'>
                        <li className='navItem'><a href='#'>History</a></li>
                        <li className='navItem'><a href='#'>Our Team</a></li>
                        <li className='navItem'><a href='#'>Blog</a></li>
                    </ul>
                    </li>
                    <li className='nav-item'><a href='#'>Careers</a></li>
                    <li className='nav-item'><a href='#'>About</a></li>
                </ul>
            </nav>
            <div className='loginButtons'>
                <a className='button' href="#">Login</a>
                <a className='button' href="#">Register</a>
            </div>
            <img className='mobileNavIcon' src='/assets/images/icon-menu.svg' onClick={handleMobileNav}/>
            <div className={'overlay '+ (mobileNav ? 'active' : '')}>
                <div className={'mobileNav ' + (mobileNav ? 'active' : '')}>
                <img className='mobileNavCloseIcon' src='/assets/images/icon-close-menu.svg' onClick={handleMobileNav}/>
                <ul>
                    <li className='mobileNav-item' onClick={()=>{setFirstSubMenuMobile(!firstSubMenuMobile)}}><a href='#'>Features <img src={'/assets/images/icon-arrow-'+(firstSubMenuMobile?'up.svg':'down.svg')} style={{verticalAlign:'middle'}}/></a></li>
                    <li className={'mobileSubMenuContent '+(firstSubMenuMobile ? 'active' : '')}>
                        <ul className='mobileSubMenu'>
                        <li className='subMenuItem'><a href='#'><img src='/assets/images/icon-todo.svg' alt='todo'/>Todo List</a></li>
                        <li className='subMenuItem'><a href='#'><img src='/assets/images/icon-calendar.svg' alt='calendar'/>Calendar</a></li>
                        <li className='subMenuItem'><a href='#'><img src='/assets/images/icon-reminders.svg' alt='reminders'/>Reminders</a></li>
                        <li className='subMenuItem'><a href='#'><img src='/assets/images/icon-planning.svg' alt='planning'/>Planning</a></li>
                        </ul>
                    </li>
                    <li className='mobileNav-item' onClick={()=>{setSecondSubMenuMobile(!secondSubMenuMobile)}}><a href='#'>Company <img src={'/assets/images/icon-arrow-'+(secondSubMenuMobile?'up.svg':'down.svg')} style={{verticalAlign:'middle'}}/></a></li>
                    <li className={'mobileSubMenuContent '+(secondSubMenuMobile ? 'active' : '')}>
                        <ul className='mobileSubMenu'>
                        <li className='subMenuItem'><a href='#'>History</a></li>
                        <li className='subMenuItem'><a href='#'>Our Team</a></li>
                        <li className='subMenuItem'><a href='#'>Blog</a></li>

                        </ul>
                    </li>
                    <li className='mobileNav-item'><a href='#'>Careers</a></li>
                    <li className='mobileNav-item'><a href='#'>About</a></li>
                </ul>
                <div className='loginButtons'>
                    <a className='button' href="#">Login</a>
                    <a className='button' href="#">Register</a>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;