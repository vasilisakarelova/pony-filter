import React, { Component } from 'react'

import Pony from './Pony'
import Filter from './Filter'
import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)

    this.handlePriceChange = this.handlePriceChange.bind(this)
    this.handleOptionChange = this.handlePriceChange.bind(this)

    this.state = {
      db,
      color: null,
      kind: null,
      price: { min: 20, max: 100 },
      isNew: null
    }
  }

  handleOptionChange(ev) {
    console.log(ev)
    this.setState({
      isNew: ev.target.value
    })
  }

  handlePriceChange(value) {
    this.setState({
      price: value
    })
  }

  render() {
    const { ponies } = this.state.db

    return (
      <div className='main-container'>
        <div className='filter'>
          <Filter handlePriceChange={this.handlePriceChange} inputRef={el => this.inputElement = el} handleOptionChange={this.handleOptionChange} state={this.state}/>
        </div>
        <div className='product-wrap'>
          { ponies.map( (found, i) => (
            <Pony key={i} db={found} photo={found.photo} id={i}/>
          ) ) }
        </div>
      </div>
    )
  }
}
