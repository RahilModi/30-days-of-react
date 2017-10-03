import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>
        <span className="title">Timeline</span>
        <input type="text" className="searchInput" placeholder="search..." />
        <div className="fa fa-search searchIcon" />
      </div>
    );
  }
}

export default Header;
