import React from 'react'

export default ({ db, photo }) => {
  return (
    <div className='product_block'>
      <span className='product product_name'>имя: {db.name}</span>
      <span className='product product_color'>цвет: {db.color}</span>
      <span className='product product_price'>цена: {db.price}₽</span>
      <img className='produc product_img' src={photo} alt='pony img'/>
    </div>
  )
}
