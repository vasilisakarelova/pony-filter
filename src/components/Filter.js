import React, { Component } from 'react'
import InputRange from 'react-input-range'

import 'react-input-range/lib/css/index.css'

import db from './db'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  kindFilter(ev) {
    this.kindArr = []
    document.querySelectorAll('input[name="kind"]:checked').forEach((el) => {
      this.kindArr.push(el.value)
    })

    this.setState({ kind: this.kindArr })
    this.props.onSelectKind(this.kindArr)
  }

  colorFilter() {
    const color = this.refs.dropdown.value
    this.setState({ color: color })
    this.props.onSelectColor(color)
  }

  priceFilter(value) {
    const price = value
    this.props.onSelectPrice(price)
  }

  isNewFilter(val) {
    this.props.onisNewFilter(val)
  }

  render() {
    const colors = db.ponies.map((pony,i) => <option value={pony.color} key={i} >{pony.color}</option>)

    const kindsUnique = [...new Set(db.ponies.map(item => item.kind))]
    const kinds = kindsUnique.map((pony,i) => (
      <span className="control-col" key={i}>
        <label className="control">
          <input type="checkbox" name='kind' value={pony} onClick={this.kindFilter.bind(this)} />
          <span style={{paddingRight: '10px'}} key={i}>{pony}</span>
        </label>
      </span>
    ))

    return (
      <div className='filter_blocks'>
        <div className='row'>
          <div className='col'>
            <div className='mb-20'>
              <select ref='dropdown' onChange={this.colorFilter.bind(this)}>
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
                maxValue={150}
                minValue={0}
                value={this.props.stateDb.price}
                onChange={this.priceFilter.bind(this)} />
            </div>
          </div>
          <div className='col'>
            <div className='mb-20'>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='true' checked={this.props.stateDb.isNew === true} onChange={(ev) => this.isNewFilter(true)} />
                  <span className='control-label'>новая</span>
                </label>
              </span>
              <span className='control-col'>
                <label className='control'>
                  <input type='radio' name='isNew' value='false' checked={this.props.stateDb.isNew === false} onChange={(ev) => this.isNewFilter(false)} />
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
