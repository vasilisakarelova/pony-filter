import React, { Component } from 'react'

import Pony from './Pony'
import Filter from './Filter'
import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: null,
      kind: null,
      price: { min: 0, max: 110 },
      isNew: null
    }

    this.ponies = db.ponies
    this.result = []

    this.priceFilter = this.priceFilter.bind(this)
    this.colorFilter = this.colorFilter.bind(this)
    this.kindFilter = this.kindFilter.bind(this)
    this.isNewFilter = this.isNewFilter.bind(this)
  }

  priceFilter(price) {
    this.setState({ price })

    this.ponies.map( obj => {
      if(obj.price >= price.min && obj.price <= price.max) {
        this.result.push(obj.id)
      } else {
        this.result = this.result.filter(item => item !== obj.id)
      }
    })
  }

  colorFilter(color) {
    this.setState({ color })

    this.ponies.map( obj => {
      if (obj.color === color) {
        this.result.push(obj.id)
      } else {
        this.result = this.result.filter(item => item !== obj.id)
      }
    })
  }

  kindFilter(kind) {
    this.setState({ kind })

    this.ponies.map( obj => {
      if (kind.indexOf(obj.kind) > -1) {
        this.result.push(obj.id)
      } else {
        this.result = this.result.filter(item => item !== obj.id)
      }
    })
  }

  isNewFilter(isNew) {
    this.setState({ isNew })

    this.ponies.map( obj => {
      if (obj.isNew === isNew) {
        this.result.push(obj.id)
      } else {
        this.result = this.result.filter(item => item !== obj.id)
      }
    })
  }

  componentWillUpdate() {
    this.ponies.map( obj => {
      if (this.result.indexOf(obj.id) > -1) {
        obj.isHidden = false
      } else {
        obj.isHidden = true
      }
    })
  }

  render() {
    return (
      <div className='main-container'>
        <div className='filter'>
          <Filter ref='filter' stateDb={this.state} onSelectColor={this.colorFilter} onSelectKind={this.kindFilter} onSelectPrice={this.priceFilter}  onisNewFilter={this.isNewFilter} />
        </div>
        <Pony db={this.ponies} />
      </div>
    )
  }
}
