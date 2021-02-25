import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

export default class Header extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <header className="header">
        <Menu secondary>
          <Link to="/main">
            <Menu.Item
              name="Home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/main/about">
            <Menu.Item
              name="About"
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/main/dynamic/Sabban">
            <Menu.Item
              name="Dynamic"
              active={activeItem === 'Dynamic'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Menu.Menu position="right">
            {/* <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item> */}
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </header>
    );
  }
}