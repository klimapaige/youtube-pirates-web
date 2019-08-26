import React, { Component } from "react";

import "../../styles/form.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      isLoading: false
    };
  }

  handleOnChange = ({ target: { value: url } }) => {
    this.setState({ url });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let { data } = this.props;
    let { url } = this.state;
    console.log(this.props);
    console.log(url);
    this.setState({ isLoading: true, error: null });
    try {
      await data.fetchDownload({ url });
      this.setState({ isLoading: false });
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false, error: "Could not get the video" });
    }
  };

  render() {
    let { isLoading, error } = this.state;
    return isLoading ? (
      <div id="loading"></div>
    ) : (
      <div>
        <div className="formTitle">
          <h2>Where we steal the amazing video loot on YouTube.</h2>
          <h3>Enter The Url To plunder</h3>
          <h4 className="error">{error}</h4>
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
