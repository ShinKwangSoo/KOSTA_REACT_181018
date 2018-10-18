import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';
import { publicDecrypt } from 'crypto';

class MyComponent extends Component {
    state={
        numberValue:0,
        message:'',
        username:'',
        clicked:false,
        validate:false,
        names: ['angular','react','test','vue']
    }
    increase=()=>{
        this.setState({
            numberValue:this.state.numberValue + 1
        });
    }
    decrese=()=>{
        this.setState({
            numberValue:this.state.numberValue - 1
        });
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleKeyPress=(e)=> {
        if(e.key==='Enter'){this.handleClick()}
    }

    handleClick=() =>{
        alert(this.state.message + ' ' + this.state.username)
        this.setState({
            clicked:true,
            validate: this.state.username !== null && this.state.message != null,
            names: this.state.names.concat(this.state.message,this.state.username) 
        })
        console.log(this.state.clicked + ' ' + this.state.validate)
        this.input.focus();
    }

    handleRemove=(index) =>{
        const {names} =this.state;
        this.setState({
            // names:[
            //     ...names.slice(0,index),
            //     ...names.slice(index+1,names.length)
            // ]
            names: names.filter((item,i)=> i !== index)
        });
    }


    render() {
        const {number, name}=this.props;
        const {increase,decrese,handleChange,handleKeyPress,handleClick,handleRemove}=this;
        const {numberValue,message,username,clicked,validate,names}=this.state;
        const namesList=names.map((name,idx)=> (<li key={idx} onDoubleClick={()=>{handleRemove(idx)}}>{name}</li>));
        return (
            <div>
                <p>MyComponent 의 이름은 {name} 입니다.</p>
                <p>숫자는 {number} 입니다.</p>
                <p>State NumberValue의 값은 {numberValue}</p>
                <button onClick={increase}>증가</button>
                <button onClick={decrese}>감소</button>
                <p>Message: {message}</p> <p>Message: {username}</p>
                <input className={clicked && validate ? 'success':'faliure'} type="text" name="message" value={message} onChange={handleChange} onKeyPress={handleKeyPress} /><br/>
                <input className={clicked && validate ? 'success':'faliure'} type="text" name="username" value={username} onChange={handleChange} onKeyPress={handleKeyPress} ref={(ref)=>this.input=ref}/><br/>
                <button onClick={handleClick}>validate</button>
                <ul>{namesList}</ul>
            </div>
        );
    }
}
MyComponent.defaultProps={
    name:'기본값'
}
MyComponent.propsTypes={
    name:PropTypes.string,
    number:PropTypes.number.isRequired,
}
export default MyComponent;