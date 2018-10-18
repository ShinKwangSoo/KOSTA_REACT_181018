import React, { Component } from 'react';


class Counter extends Component {
    state={number:this.props.value}
    handleIncrease =()=> {
        this.setState({
            number : this.props.value+1
        });
       
        
    }
    handleDecrease=(e)=>{
        this.setState({
            number: this.props.value-1
        });
        
    }
    
    render(){
        return (
            <div>
            <h1>Counter</h1>
            <div>현재 값 : {this.state.number}</div>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>    
            </div>
        )
    
    }
}

export default Counter;