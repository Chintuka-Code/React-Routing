import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit() {
    console.log('hello');
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          <div>
            <label></label>
            <input
              type="submit"
              onClick={this.submit.bind(this)}
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
