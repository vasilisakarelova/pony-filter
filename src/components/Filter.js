import React, { Component } from 'react'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'

import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = props.state
  }

  render() {
    const colors = db.ponies.map((pony,i) => <option value={pony.id} key={i} >{pony.color}</option>)
    const kinds = db.ponies.map((pony,i) => (
      <span className="control-col" key={i}>
        <label className="control">
          <input type="checkbox" />
          <span style={{paddingRight: '10px'}} key={i}>{pony.kind}</span>
        </label>
      </span>
    ))

    const colorsFilter = db.ponies.map((pony,i) => ({ ID: pony.id, filter: pony.color }))
    const kindsFilter = db.ponies.map((pony,i) => ({ ID: pony.id, filter: pony.kind }))
    const pricesFilter = db.ponies.map((pony,i) => ({ ID: pony.id, filter: pony.price }))
    const isNewFilter = db.ponies.map((pony,i) => ({ ID: pony.id, filter: pony.is_new }))

    return (
      <div className='filter_blocks'>
        <div className='row'>
          <div className='col'>
            <div className='mb-20'>
              <select>
                {colors}
              </select>
              <div className='select__arrow'></div>
            </div>
          </div>
          <div className='col'>
            <div className='mb-20'>
              {kinds}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='mb-20'>
              <InputRange
                maxValue={220}
                minValue={0}
                value={this.state.price}
                onChange={this.props.handlePriceChange} />
            </div>
          </div>
          <div className='col'>
            <div className='mb-20'>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='true' onChange={this.props.handleOptionChange} />
                  <span className='control-label'>новая</span>
                </label>
              </span>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='false' onChange={this.props.handleOptionChange} />
                  <span className='control-label'>старая</span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
