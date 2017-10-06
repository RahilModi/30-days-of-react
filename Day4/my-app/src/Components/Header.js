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
    const wrapperStyle={
      backgroundColor: 'rgba(251, 202, 43, 1)'
    }
    
    const titleStyle = {
      color: '#110000'
    }
    
    return (
      <div className="header" style={wrapperStyle}>
        <MenuButton />
        <span className="title" style={titleStyle}>
          {this.props.title}
        </span>
        <input type="text" className={searchInputClasses.join(' ')} placeholder="search..." />

        <div onClick = {this.showSearch.bind(this)} className="fa fa-search searchIcon" style={titleStyle}/>
      </div>
    );
  }
}

export default Header;
