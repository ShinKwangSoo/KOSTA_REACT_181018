import React, { Component } from 'react';
import MyComponent from './MyComponent'
import Counter from './Counter';

class App extends Component {
  state={counterValue:5}
  sayHello(){
    alert('hello?');
  }
  render() {
    let name='byee';
    const {sayHello}=this;
    return (
      <React.Fragment>
        <h2>hi react {name}</h2>
        {
          name ==='bye' && ( <button onClick={sayHello}>Button</button>)
        }
        <MyComponent name="React" number="11"/>
        <Counter value={this.state.counterValue} />
      </React.Fragment>
    );
  }
}

export default App; 