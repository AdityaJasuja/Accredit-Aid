import { slide as Menu } from 'react-burger-menu'
import React from 'react'


class Burgermenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/home">Set-up Curriculum</a>
        <a id="about" className="menu-item" href="/about">Set-up Facilities</a>
        <a id="materials" className="menu-item" href="/materials">Set-up Continuous Improvement</a>
        <a id="contact" className="menu-item" href = "/contact" >Set-up Materials</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="\">Settings</a>
      </Menu>
      
    );
  }
}

export default Burgermenu