import React from 'react'
import classes from 'classnames'

export default ({ db }) => {
  const result = []

  db.map( (pony, i) => {
    result.push(
      <div data-key={pony.id} key={i} className={classes({
        product_block: true,
        is_hidden: pony.isHidden
      })}>
      <span className='product product_name'>имя: {pony.name}</span>
      <span className='product product_name'>вид: {pony.kind}</span>
      <span className='product product_color'>цвет: {pony.color}</span>
      <span className='product product_price'>цена: {pony.price}₽</span>
      <img className='produc product_img' src={pony.photo} alt='pony img'/>
    </div>
    )
  })

  return (
    <div className='product-wrap'>
      {result}
    </div>
  )
}
