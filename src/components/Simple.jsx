import React from 'react'
import { products } from '../data/product.js'
export default function Simple() {
  
  const [p1, p2, ...remaining] = products
  const unCheckedList = [p1, p2];

  const result1 = unCheckedList.map((product, index) => (
    <div key={index}>
      <hr />
      <li> ❌ {product} </li>
    </div>
  ))

  const result2 = remaining.map((product, index) => (
    <div key={index}>
      <hr />
      <li> ✔ {product} </li>
    </div>
  ))

  return (
    <div>
      <h1 className='text-center my-4'>Todo List : </h1>
      <div className='noteItem'>
        {result1}
        {result2}
      </div>
    </div>
  )
}
