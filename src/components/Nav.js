import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <>
        <Link to='/'>Search</Link>
        <br />
        <Link to='/Saved'>Saved</Link>
      </>
    )
  }
}

export default Nav
