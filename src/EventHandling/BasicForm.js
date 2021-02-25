import React from 'react';
import axios from 'axios';

class BasicEvent extends React.Component {
  state = { input: ' ', data: [] };
  inputchange(event) {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  }

  async onFormSubmit(event) {
    event.preventDefault();
    const data = await axios.get(
      'https://api.endlessmedical.com/v1/dx/GetOutcomes'
    );
    if (data.data.status === 'ok') {
      this.setState({ data: data.data.data });
      console.log(this.state.data);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Search"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <input type="submit" />
        </form>
        <div>
          {this.state.data.map((res) => (
            <div>
              <h1>This is a Map</h1>
              <h1>{res}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BasicEvent;
