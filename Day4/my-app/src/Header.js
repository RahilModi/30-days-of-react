import React, { Component } from 'react';
import MenuButton from './MenuButton';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  showSearch(){
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }
  render() {
    // Classes to add to the <input /> element
    let searchInputClasses = ["searchInput"];

    // Update the class array if the state is visible
    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <div className="header">
        <MenuButton />
        <span className="title">
          {this.props.title}
        </span>
        <input type="text" className={searchInputClasses.join(' ')} placeholder="search..." />

        <div onClick = {this.showSearch.bind(this)} className="fa fa-search searchIcon" />
      </div>
    );
  }
}

export default Header;
