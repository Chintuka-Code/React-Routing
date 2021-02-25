import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class Header extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <header className="header">
        <Menu secondary>
          <Link id="RouterNavLink" to="/main">
            <Menu.Item
              name="Home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/about">
            <Menu.Item
              name="About"
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/dynamic/Sabban">
            <Menu.Item
              name="Dynamic"
              active={activeItem === 'Dynamic'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/basic">
            <Menu.Item
              name="Basic Class"
              active={activeItem === 'Basic Class'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/basicstate">
            <Menu.Item
              name="Basic State"
              active={activeItem === 'Basic State'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/basicevent">
            <Menu.Item
              name="Basic Event"
              active={activeItem === 'Basic Event'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/basiclife">
            <Menu.Item
              name="Login Form"
              active={activeItem === 'Login Form'}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link id="RouterNavLink" to="/main/login">
            <Menu.Item
              name="Basic Form"
              active={activeItem === 'Basic Form'}
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
