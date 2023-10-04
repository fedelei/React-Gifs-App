import React, { useState } from 'react'
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

 /* const handleAdd = (i) => {
    setCategories([...categories, 'Pokemon']);
  }*/


  return (

    <>

      <h2 className='animate__animated animate__backInLeft'>Gifs Search</h2>
      <AddCategory setCategories={ setCategories } />
      <hr/>
      
        <ol>
            {
           categories.map(category => 
            <GifGrid 
            category={ category } 
            key={ category } />
            )
        }
        </ol>

    </>
  )
}

export default GifExpertApp;