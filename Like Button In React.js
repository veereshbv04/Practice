import React, { Component } from "react";

class LikeButton extends Component{

  constructor(props){
    super(props);
    this.state = {
      counter : 0
    }
    this.btnClicked = this.btnClicked.bind(this);
    this.btnIncrement = this.btnIncrement.bind(this);
    this.btnDecrement = this.btnDecrement.bind(this);
  }


  btnClicked(){
    this.setState(state => {
      if(state.counter === 0){
        console.log("ss")
        return {counter : 1}
      }else{
        console.log("aaaa");
        return {counter : 0}
        
      }
    })
  }

  btnIncrement(){
    this.setState(state => ({
      counter: state.counter + 1
    }));

    console.log(this.state.counter);
  }

  btnDecrement(){
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }
  // btnClicked(){
  //   this.setState({
  //     counter: 1
  //   })
  // }
 
  render(){
    return(
      <div>
         <button onClick={this.btnIncrement}>+</button>
        <button onClick={this.btnClicked}>CLick Me</button>
        <button onClick={this.btnDecrement}>-</button>
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

export default LikeButton;
