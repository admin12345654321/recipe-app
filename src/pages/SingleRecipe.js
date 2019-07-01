import React, { Component } from 'react';
// import { recipeData } from '../data/tempDetails';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      // recipe: recipeData,
      recipe: {},
      id,
      loading: true
    };
  }
  async componentDidMount() {
    // const API_KEY = '3ad2c585c4073d4813c32411bcadcbac';
    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_API_KEY
    }&rId=${this.state.id}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        recipe: responseData.recipe,
        loading: false
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {
      image_url,
      publisher,
      f2f_url,
      ingredients,
      title,
      source_url,
      publisher_url
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                loading recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Link
              to='/recipes'
              className='btn btn-warning text-capitalize mb-3'
            >
              back to recipes list
            </Link>
            <img
              src={image_url}
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='recipe'
            />
          </div>
          {/* info */}
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h6 className='text-uppercase'>{title}</h6>
            <h6 className='text-capitalize text-warning text-slanted'>
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary text-capitalize mt-2'
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 mx-2 text-capitalize'
            >
              recipe url
            </a>
            <ul className='list-group mt-4'>
              <h2 className='mt-3 mb-4 text-capitalize'>ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className='list-group-item text-slanted'>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
