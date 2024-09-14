import React from 'react'
import './goodhandsleft.css'
import Image from "next/image";
import { ArrowOrange, People } from '@/img/index'


const GoodHandsLeft = () => {
  return (
    <div className='GoodHandsLeft'>
        <div className='GoodHandsLeft-wrap'>
          <Image src={People} alt="" className='img-people-left'/>
            <div className='GoodHandsLeft-text'>
                <p className='line-cards'></p>
                <h2>You’re in good hands</h2>
                <p className='GoodHandsLeft-texttt'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <button className='btn-black'>Learn more<Image src={ArrowOrange} alt=""/></button>
            </div>  
        </div>
    </div>
  )
}

export default GoodHandsLeft