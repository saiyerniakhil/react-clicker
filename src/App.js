import React from 'react'
//import ReactDOM from 'react-dom'
import { Button } from 'reactstrap';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    if(event.target.className === 'plus') {
      this.setState({
        counter : this.state.counter + 1
      }) 
    }
    else if (event.target.className === 'minus') {
      this.setState({
        counter : this.state.counter - 1
      }) 
    }
    else {
      this.setState({
        counter : 0
      }) 
    }
  }

  render() {
    return(
      <div>
        <div style={{backgroundColor:"aliceblue",width:300,height:200}}>
          <h1>React Clicker!</h1>
          <h1>{this.state.counter}</h1>
          <div><button className = 'plus' onClick={this.handleClick} >+</button> <button className='reset' onClick={this.handleClick}>Reset</button> <button className='minus' onClick={this.handleClick}>-</button> </div>
        </div>
      </div>  
    );
  }
}

export default App;
