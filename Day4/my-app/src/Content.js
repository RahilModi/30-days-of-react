import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="line" />
        {/*Timeline item*/}
        <div className="item">
          <div className="avatar">
            <img
              alt="Dog"
              src="http://www.croop.cl/UI/twitter/images/doug.jpg"
            />
          </div>
          <span className="time">An hour ago</span>
          <p> Ate lunch </p>
          <div className="commentCount">2</div>
        </div>
        {/*...*/}
      </div>
    );
  }
}

export default Content;
