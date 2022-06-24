import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return(
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. giv it a try'}
      </p>
      <div className='center width'>
        <div className='pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 b-none shadow-4' type='text' placeholder='url' onChange={onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue b-none bgc' onClick={onButtonSubmit}>DETECT</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm