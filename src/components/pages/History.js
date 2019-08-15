import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }

  async componentDidMount() {
    let { data } = this.props;
    let records = await data.getHistory();
    this.setState({ records });
  }

  render() {
    return (
      <div>
        <h2>History</h2>
        {this.state.records.map(({}) => )}
      </div>
    );
  }
}
