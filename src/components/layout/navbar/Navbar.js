import React from 'react'
import NavItem from './navItem/NavItem'

const Navbar = () => {
    return (
        <div className="bg-indigo-500 text-right p-3">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#socials">Socials</NavItem>
        </div>
    )
}

export default Navbar