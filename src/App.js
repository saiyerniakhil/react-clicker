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
    if(event.target.id === 'plus') {
      this.setState({
        counter : this.state.counter + 1
      }) 
    }
    else if (event.target.id === 'minus') {
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
        <div className="container text-center" style={{position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)',backgroundColor:"aliceblue",width:300,height:200}}>
          <h1 >React Clicker!</h1>
          <h1 >{this.state.counter}</h1>
          <div ><Button color="success" className='text-center' id = 'plus' onClick={this.handleClick} >+</Button> <Button color="warning" id='reset' onClick={this.handleClick}>Reset</Button> <Button color='danger' id='minus' onClick={this.handleClick}>-</Button> </div>
         
        </div>
      </div>  
    );
  }
}

export default App;
