import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class Main extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu inverted>
        <Menu.Item
          name="Footer"
          active={activeItem === 'Footer'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
