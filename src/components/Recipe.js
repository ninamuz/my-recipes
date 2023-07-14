
import React from 'react'

export default function Recipe({ title, type, image }) {

  return (
    <div>
      <h2>{title}</h2>
      <p>Cuisine type: {type}</p>
      {/* <img src={image}></img> */}
    </div>
  )
}
