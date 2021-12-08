import { Component } from 'react';

export default class EventBind extends Component {
  handleClick() {
    // alert("Hello");
    console.log(this);
  }

  render() {
    return (
      <div>
        {/**
         * 1. Binding in render method
         * 2. Binding in render method using arrow function
         * 3. Binding in the constructor
         * 4. Class property as an arrow function
         */}
        <p></p>
        <h2>EventBinding</h2>
        <button onClick={this.handleClick.bind(this)}>Click1</button>
      </div>
    );
  }
}
