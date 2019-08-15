import React, { Component } from "react";
import Bar from "../DownloadBar";

export default class DownloadPage extends Component {
  constructor({ url, ...rest }) {
    super(rest);
    this.state = {
      url,
      downloadClicked: false,
      downloadFinished: false
    };
  }

  handleDownloadClick = async () => {
    this.setState({ downloadClicked: true });
    let { data } = this.props;
    let fileResponse = await data.fetchVideoFile(this.state.url);
    window.open(fileResponse.file);
    this.setState({ downloadFinished: true });
  };

  render() {
    return (
      <div>
        <h2>Downloading {this.state.url}</h2>
        {this.state.downloadFinished ? <Bar percentage={1} /> : null}
        {this.state.downloadClicked ? <Bar percentage={0} /> : null}
        <input onClick={this.handleDownloadClick} value="Download" />
      </div>
    );
  }
}
