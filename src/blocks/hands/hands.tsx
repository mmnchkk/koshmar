import React from 'react'
import "./hands.css"
import Image from "next/image";
import { ArrowWhite } from '@/img/index'

const Hands = () => {
  return (
    <div className='hands'>
        <div className='hands-wrap'>
            <p className='hands-line'></p>
            <h3>You’re in good hands</h3>
            <p className='hands-text'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
            <button className='btn-orange'>
                Learn more
                <Image src={ArrowWhite} alt=""/>
            </button>  
        </div>
    </div>
  )
}

export default Hands