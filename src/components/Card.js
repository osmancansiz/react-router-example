import React, { Component } from "react";

export default class Card extends Component {
  state = {
      user: ''
  };

  componentDidMount(){
    let user = this.props.match.params.user;
    this.setState({user})
  }

  render() {
    return (
      <div>
        <div
          className="ui raised very padded text container segment"
          style={{ marginTop: "80px" }}
        >
          <h3 className="ui header">{this.state.user}</h3>
        </div>
      </div>
    );
  }
}
