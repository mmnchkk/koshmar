import React from 'react'
import './goodhandsright.css'
import Image from "next/image";
import { ArrowOrange, PeopleR } from '@/img/index'


const GoodHandsRight = () => {
  return (
    <div className='GoodHandsRight'>
        <div className='GoodHandsRight-wrap'>
            <div className='GoodHandsRight-text'>
                <p className='line-cards'></p>
                <h2>You’re in good hands</h2>
                <p className='GoodHandsRight-texttt'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
                <button className='btn-black'>Learn more<Image src={ArrowOrange} alt=""/></button>
            </div>
            <Image src={PeopleR} alt="" className='img-people'/>  
        </div>
    </div>
  )
}

export default GoodHandsRight