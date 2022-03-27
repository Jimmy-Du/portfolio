import React from 'react'

const NavItem = (props) => {
  return (
    <a className="pr-8 hover:underline sm:text-xl text-gray-800" href={props.href}>{props.children}</a>
  )
}

export default NavItem