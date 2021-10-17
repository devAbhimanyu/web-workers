import React, { Component } from 'react';
import img from '../../assets/tokyoGhoul.jpg';
export default class Test extends Component {
  render() {
    return (
      <div>
        Test
        <img height={330} src={img} alt='' />
      </div>
    );
  }
}
