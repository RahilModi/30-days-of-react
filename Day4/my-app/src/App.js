import React, {Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Content';
// An async request
const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => {
                        console.log(test);
                        json.slice(0, 8)
                      });

class App extends Component {
constructor(props){
  super(props);
  this.state = {refreshing: false}
}

refresh(){
  console.log("refreshing")
  this.setState({refreshing: true})
}

onComponentRefresh(){
  console.log('onrefreshing')
  this.setState({refreshing: false});
}

render() {
  const {refreshing} = this.state;
  return (
    <div className="notificationsFrame">
      <div className="panel">
        <Header title = 'Github activity' />
        <Content 
          onComponentRefresh={this.onComponentRefresh.bind(this)}
          requestRefresh={refreshing}
          fetchData = {fetchEvents} />
        <Footer>
          <button onClick={this.refresh.bind(this)}>
          <i className="fa fa-refresh" />
          Refresh
          </button>
        </Footer>  
      </div>
    </div>
  );
  }
}

export default App;
