import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/GetGifs';

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__flipInX">{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem 
          key={img.id} 
          {...img} />
        ))}
      </div>
    </>
  );
};
