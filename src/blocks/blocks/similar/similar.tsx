import React from 'react'
import './similar.css'
import { Card } from '@/components'
import { OneCard, TwoCard, ThreeCard, FourCard } from '@/img/index'

const Similar = () => {
  return (
    <div className='similar'>
      <div className='similar-wrap'>
        <p className='line-cards'></p>
        <h2>Similar listings</h2>
        <div className='similar-cards'>
          <Card img={OneCard}/>
          <Card img={TwoCard}/>
          <Card img={ThreeCard}/>
          <Card img={FourCard}/>
        </div>
      </div>
    </div>
  )
}

export default Similar