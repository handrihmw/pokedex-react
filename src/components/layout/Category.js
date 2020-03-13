import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-centered">
          <div className='col-md-12 col mb-5 category text-center btn-type'>
            <div className="col-md-12 ">
              <h3>Filter by type of Pokémon</h3>
            </div><br/>
            <div className='col-md-12 col-sm-6 mb-5 btn-type col-centered'>
              <a href="#" className="btn normal disabled">Normal</a>
              <a href="#" className="btn fighting disabled">Fighting</a>
              <a href="#" className="btn flying disabled">Flying</a>
              <a href="#" className="btn poison disabled">Poison</a>
              <a href="#" className="btn ground disabled">Ground</a>
              <a href="#" className="btn rock disabled">Rock</a>
              <a href="#" className="btn bug disabled">Bug</a>
              <a href="#" className="btn ghost disabled">Ghost</a>
              <a href="#" className="btn steel disabled">Steel</a>
              <a href="#" className="btn fire disabled">Fire</a>
              <a href="#" className="btn water disabled">Water</a>
              <a href="#" className="btn grass disabled">Grass</a>
              <a href="#" className="btn electric disabled">Electric</a>
              <a href="#" className="btn psychic disabled">Psychic</a>
              <a href="#" className="btn ice disabled">Ice</a>
              <a href="#" className="btn dragon disabled">Dragon</a>
              <a href="#" className="btn dark disabled">Dark</a>
              <a href="#" className="btn fairy disabled">Fairy</a>
              <a href="#" className="btn unknown disabled">Unknown</a>
              <a href="#" className="btn shadow disabled">Shadow</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
