import React, { Component } from 'react';
import ActivityItem from './ActivityItem'

class Content extends Component {
  render() {
    const {activities} = this.props; //ES6 destructuring => const activities = this.props.activities;

    return(
      <div className="content">
        <div className="line" />
        {/*Timeline item*/}
        {activities.map((activity) => 
            <ActivityItem activity={activity} />
        )}
      </div>
    );
  }
}

export default Content;
