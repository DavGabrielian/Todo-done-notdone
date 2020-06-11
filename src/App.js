import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
              {data.map((data) => {
                if (data.completed === true) return(
                <li>
                  {" "}
                  {data.id}
                  <a> {data.title} </a>
                </li>
                )
              })}
          </div>
          <div class="column">
          {data.map((data) => {
                if (data.completed === false) return(
                <li>
                  {" "}
                  {data.id}
                  <a> {data.title} </a>
                </li>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
