import React from 'react'
import "./people.css"
import Client from './client'

const People = () => {
  return (
    <div className='people'>
        <div className='people-wrap'>
            <div className='people-one'>
              <p className='people-line'></p>
              <p className='people-text'>“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”</p>
            </div>
            <div className='people-two'>
              <Client/>
              <div className='people-black'>
                <Client/>
              </div>
              <Client/>
            </div>
        </div>
    </div>
  )
}

export default People