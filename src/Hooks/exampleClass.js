import React from "react";

class ExampleClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    componentDidMount() {
        console.log("DidMount");
      }
      componentDidUpdate() {
        console.log("DidUpdate");
        document.title = `You clicked ${this.state.count} times yy`;
      }
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }
  

  export default ExampleClass;