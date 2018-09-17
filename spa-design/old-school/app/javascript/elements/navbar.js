import React from 'react'

export default class Navbar extends React.Component {

  render() {
    return (
      <React.Fragment>
        <a className="p-2 text-dark" href="#">Features</a>
        <a className="p-2 text-dark" href="#">Enterprise</a>
        <a className="p-2 text-dark" href="#">Support</a>
        <a className="p-2 text-dark" href="#">Pricing</a>
      </React.Fragment>
    );
  }

}
