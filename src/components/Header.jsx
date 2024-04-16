import React, { useRef } from 'react'
import { FaCamera } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

import '../globals.css'
import { Link } from 'react-router-dom';
const Header = () => {
    const showMenu = useRef();

    const show = () => {
        showMenu.current.style.transform = 'translateX(0)'
    }

    const hide = () => {
        showMenu.current.style.transform = 'translateX(100%)'
    }

    return (
        <>
            <div className="d-flex col-lg-11 mx-auto justify-content-between align-items-center py-4 px-2">
                <div className="logo d-flex align-items-center gap-2">
                    <FaCamera color='#27A776' size={30} />
                    <h1>PhotoFolio</h1>
                </div>
                <div className="items">
                    <ul ref={showMenu} className="d-flex my-items p-0 m-0 list-unstyled gap-2 text-uppercase">
                        <IoCloseOutline onClick={hide} className='close ms-auto text-danger' size={30} cursor="pointer" />
                        <li>home</li>
                        <Link to='/about'>About</Link>

                        <li className="position-relative gallery">
                            gallery
                            <div className="main-menu">
                                <ul className="list-unstyled gallery-1 px-2 position-absolute">
                                    <li>nature</li>
                                    <li>people</li>
                                    <li>Architecture</li>
                                    <li>animals</li>
                                    <li>sports</li>
                                    <li>travel</li>
                                    <li className='position-relative sub'>
                                        submenu
                                        <ul style={{ transform: 'translate(-106%,-20px)' }} className="list-unstyled gallery-2  position-absolute px-2 left-0 text-white">
                                            <li>sub menu 1</li>
                                            <li>sub menu 2</li>
                                            <li>sub menu 3</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <MdFilterList onClick={show} size={40} color="white" className='toggle' />
            </div>
        </>
    )
}

export default Header
