import React, {Component} from 'react';

class ActivityItem extends Component{

	render(){
		const {activity} = this.props;
		
		return (
            <div className="item">
              <div className="avatar">
                <img
                  alt={activity.user.name}
                  src={activity.user.avatar}/>
              </div>
              <span className="time">{activity.timestamp}</span>
              <p> {activity.text} </p>
              <div className="commentCount">{activity.comments.length}</div>
            </div>
        );
	}
}

export default ActivityItem;