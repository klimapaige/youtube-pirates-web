import React, { Component } from "react";

import "../../styles/form.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }

  handleOnChange = ({ target: { value: url } }) => {
    this.setState({ url });
  };

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="formTitle">
          <h2>Where we steal the amazing video loot on YouTube.</h2>
          <h3>Enter The Url To plunder</h3>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.url}
            onChange={this.handleOnChange}
            required
            placeholder="YouTube Url(ex. https://youtube.com/watch?v=jofNR_WkoCE)"
            pattern="https?:[/]{2}([w]{3}\.)?[yY][oO][uU][tT][uU][bB][eE]\.com[/]watch[?]v=.+"
            title="YouTube Url(ex: https://youtube.com/watch?v=jofNR_WkoCE)"
          />
          <input type="submit" value="Go To Download" />
        </form>
      </div>
    );
  }
}
