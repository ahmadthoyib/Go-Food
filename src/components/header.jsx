import React,{Component} from 'react';
import {
  Navbar,
  NavbarBrand,} from 'reactstrap';

export default class Header extends Component {
  
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:'red'}} color="faded" light>
          <NavbarBrand href="/" className="mr-auto">GO-FOOD</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

