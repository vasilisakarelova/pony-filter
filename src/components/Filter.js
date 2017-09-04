import React, { Component } from 'react'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'

import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: null,
      kind: null,
      value: { min: 2, max: 10 },
      isNew: null
    }
  }

  handleOptionChange(ev) {
    this.setState({
      isNew: ev.target.value
    })
  }

  handlePriceChange(ev) {
    this.setState({
      price: ev.target.value
    })
  }

  render() {
    const colors = db.ponies.map((pony,i) => <option value={pony.id} key={i}>{pony.color}</option>)
    //const prices = db.ponies.map((pony,i) => <span style={{paddingRight: '10px'}} key={i}>{pony.price}</span>)
    //const isNew = db.ponies.map((pony,i) => (pony.is_new) ? <span style={{paddingRight: '10px'}} key={i}>новый</span> : <span style={{paddingRight: '10px'}} key={i}>старый</span>)
    const kinds = db.ponies.map((pony,i) => (
      <span className="control-col" key={i}>
        <label className="control">
          <input type="checkbox" />
          <span style={{paddingRight: '10px'}} key={i}>{pony.kind}</span>
        </label>
      </span>
    ))

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
                maxValue={200}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })} />
            </div>
          </div>
          <div className='col'>
            <div className='mb-20'>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='true' checked={this.state.isNew === 'true'} onChange={this.handleOptionChange.bind(this)} />
                  <span className='control-label'>новая</span>
                </label>
              </span>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='false' checked={this.state.isNew === 'false'} onChange={this.handleOptionChange.bind(this)} />
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
