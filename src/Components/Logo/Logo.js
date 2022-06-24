import React from 'react'
import Tilt from 'react-parallax-tilt'
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
  return(
    <div className='ma4 mt0'>
      <Tilt className='tilt' style={{ height: '150px', width: '150px', backgroundColor: 'darkgreen' }} transitionSpeed={800}>
        <div className='pa3'>
          <img src={brain} alt='logo' style={{paddingTop: '5px'}}/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo