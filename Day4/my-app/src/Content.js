import React, { Component } from 'react';
import ActivityItem from './Components/GithubActivityItems'
const data = require('./data.json');

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      activities: []
    }
  }

  componentDidMount() {
    this.updateData();
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh !== this.props.requestRefresh) {
      this.setState({loading: true}, this.updateData);
    }
  }

    // Call out to github data and refresh directory
  updateData() {
    this.setState({
      loading: false,
      activities: data.slice(0, 8)
    }, this.props.onComponentRefresh);
  }

  render() {
    const {loading,activities} = this.state; //ES6 destructuring => const activities = this.props.activities;

    return(
      <div className="content">
        <div className="line" />
        {loading && <div>Loading</div>}
        {/*Timeline item*/}
        {activities.map((activity) =>
            <ActivityItem key={activity.id} activity={activity} />
        )}
      </div>
    );
  }
}

export default Content;
