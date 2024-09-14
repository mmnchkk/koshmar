import React from 'react'
import './inTro.css'

const InTro = () => {
  return (
    <div className='inTro'>
        <div className='inTro-border'>
            <div className='inTro-wrap'>
              <div className='inTro-left'>
                    <h2>Modern House</h2>
                    <p>3002 Foster Ave, Brooklyn, NY 11210, USA</p>
                </div>
                <div className='inTro-right'>
                    <h2>$450,000</h2>
                    <p>$2,800/sq ft</p>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default InTro