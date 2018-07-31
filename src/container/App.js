import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getdata } from "../service";
class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    getdata()
      .then(res => {
        this.setState({
          users: res.data
        });
        console.log(this.state.users);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { users = "loading ...." } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container" style={{ marginTop: "20px" }}>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map(e => (
                <tr key={e.id}>
                  <th>{e.name}</th>
                  <th>{e.phone}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
