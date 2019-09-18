import React, {useEffect, useState} from 'react';
import './App.css';

import Recipe from './Recipe'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const appId = "23bf9281"
  const appKey = "e6f1f15b118c88e0852ad8fff41fb975"

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  } 

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => { 
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
      const data = await response.json()
      setRecipes(data.hits)
  }
  

  return (
    <div className="App">
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='search-bar' type='text' value={search} onChange={handleChange}/>
        <button className='seach-button' type="submit">Search</button>
      </form>
      {recipes.map((recipe, i) => (
        <Recipe recipe={recipe.recipe} key={'chicken '+ i}/>
      ))}
    </div>
  )
}

export default App;
