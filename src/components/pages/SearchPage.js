import React, { Component } from "react";
import VideoDisplay from "../VideoComponent";
export default class SearchPage extends Component {
  constructor({ term, data, ...other }) {
    super({ ...other });
    console.log(data);
    this.state = {
      term,
      data,
      results: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let videos = await this.state.data.fetchVideos({ query: this.state.term });
    this.setState({ results: videos });
  }

  render() {
    return (
      <main>
        <h2>Search Results For: {this.state.term}</h2>
        <div className="flex-container video-container">
          {this.state.results.map((video, index) => (
            <VideoDisplay key={index} {...video} />
          ))}
        </div>
      </main>
    );
  }
}
