import React from 'react';
import axios from 'axios';

class BasicEvent extends React.Component {
  state = { input: ' ', data: [], message: '', status: null };
  inputchange(event) {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  }

  async onFormSubmit(event) {
    event.preventDefault();
    try {
      const data = await axios.get(
        'https://api.endlessmedical.com/v1/dx/GetOutcomes'
      );
      if (data.data.status === 'ok') {
        this.setState({ data: data.data.data });
        console.log(this.state.data);
      }
    } catch (error) {
      this.setState({ status: 404 });
    }
  }

  render() {
    if (this.state.status === 404) {
      return <h1> Some Error </h1>;
    } else {
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
          <h1> {this.state.input} </h1>
        </div>
      );
    }
  }
}

export default BasicEvent;
