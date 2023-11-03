import React, { Component } from 'react';

class CounterTitleClass extends Component {
  state = { 
    count: 0,

   } 
  render() { 
    return (<div className='container m-5'>
      <h4>You have Clicked ${this.state.count} Times</h4>
      <button className='btn btn-primary' onClick={()=>{this.setState({count: this.state.count+1})}}>Click</button>
    </div>);
  }

  componentDidMount(){
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(){
    document.title = `Clicked ${this.state.count} times`;
  }

  componentWillUnmount(){
    document.title = `React App`;
  }
}
 
export default CounterTitleClass;