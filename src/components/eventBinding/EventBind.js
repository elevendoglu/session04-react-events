import { Component } from 'react';

export default class EventBind extends Component {
    constructor(props){
      super(props);
      this.state= {message: "Hellooo Constructor"};
    }
  // handleClick() {                          //1.render method
  // handleClick(name) {                       //Second method 
  handleClick = () => {
    this.setState({ message: 'This method is most useful method of class methods'});

    // this.setState({ message: "Updated message Goodbye"});                  //1.render method
    // this.setState({ message: "Updated message: Goodbye " + name });  //2.render-arrow

    // alert("Hello");
    console.log(this);
  };

  render() {
    return (
      <div>
        {/**
         * 1. Binding in render method
         * 2. Binding in render method using arrow function
         * 3. Binding in the constructor
         * 4. Class property as an arrow function
         */}
        <p>{this.state.message}</p>
        <h2>EventBinding</h2>
        {/* <button onClick={this.handleClick.bind(this)}>Click1</button>              //1.render method */}
        {/* <button onClick={() => this.handleClick('elevo')}>Click2</button>            // 2.render-arrowmethod  */}

        <button onClick= {this.handleClick}>click4</button>


      </div>
    );
  }
}
