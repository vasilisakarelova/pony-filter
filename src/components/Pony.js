import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className='product_block' data-key={this.props.id}>
        <span className='product product_name'>имя: {this.props.db.name}</span>
        <span className='product product_color'>цвет: {this.props.db.color}</span>
        <span className='product product_price'>цена: {this.props.db.price}₽</span>
        <img className='produc product_img' src={this.props.photo} alt='pony img'/>
      </div>
    )
  }
}
