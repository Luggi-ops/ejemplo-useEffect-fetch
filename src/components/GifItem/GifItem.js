import React from 'react'

const GifItem = ({img, title}) => {
  return (
    <>
        <h1>{title}</h1>
        <img src={img} alt={title}/>
    </>
  )
}

export default GifItem