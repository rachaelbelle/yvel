import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
      </>
    )
  }
}

export default Nav
