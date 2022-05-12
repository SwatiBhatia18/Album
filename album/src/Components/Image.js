import React from 'react'
import './Image.css'
const Image = ({src , ssrc , handleCLick , ...rootDOMAttributes }) => {
  
  return (
    <li className='img' {...rootDOMAttributes} onClick={()=>handleCLick(ssrc)}>
        <img src={src} alt='photos' width="250"></img>
    </li>
  )
}

export default Image

