import React from 'react'
import './intro.css'
import Image from "next/image";
import { ArrowOrange } from '@/img/index'

const Intro = () => {
  return (
    <div className='intro'>
        <div className='intro-wrap'>
            <div className='intro-title'>
                <h1>Beautiful homes made for you</h1>
                <p>In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
            </div>
            <div className='intro-down'>
                <p>See all listings</p>
                <Image src={ArrowOrange} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Intro