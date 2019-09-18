import React from 'react'

export default props => {
  return (
    <div>
      <h1>{props.recipe.label}</h1>
      <p>{props.recipe.calories}</p>
      <img src={props.recipe.image} alt='chicken'/>
    </div>
  )
}