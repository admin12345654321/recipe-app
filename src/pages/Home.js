import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
      <Header title='creative recipes'>
        <Link
          to='/recipes'
          className='btn btn-secondary btn-lg text-uppercase mt-5'
        >
          recipe search
        </Link>
      </Header>
    );
  }
}
