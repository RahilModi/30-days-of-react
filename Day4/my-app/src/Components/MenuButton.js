import React from 'react'
const menuColor = {
      backgroundColor: '#111111'
    }
const MenuButton = (props)=> (
	<div className="menuIcon">
        <div className="dashTop" style={menuColor}></div>
        <div className="dashBottom" style={menuColor}></div>
        <div className="circle" style={menuColor}></div>
    </div>
)

export default MenuButton;