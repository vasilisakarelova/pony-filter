import React, { Component } from 'react'

import Pony from './Pony'
import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = db
  }

  render() {
    const { ponies } = this.state

    return (
      <div className='main-container'>
        <div className='filter'></div>
        <div className='product-wrap'>
          { ponies.map( (found, i) => (
            <Pony key={i} db={found} photo={found.photo} />
          ) ) }
        </div>
      </div>
    )
  }
}
