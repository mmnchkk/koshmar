import React from 'react'
import './cards.css'
import { Card } from '@/components'
import Image from "next/image";
import { OneCard, TwoCard, ThreeCard, FourCard, SixCard, Down } from '@/img/index'

const Cards = () => {
  return (
    <div className='cards'>
        <div className='cards-wrap'>
            <div className='cards-title'>
                <p className='line-cards'></p>
                <h2>Find your next place to live</h2>
                <div className='cards-uls'>
                    <p className='cards-uls-border'>Looking for<Image src={Down} alt=""/></p>
                    <p className='cards-uls-border'>Location<Image src={Down} alt=""/></p>
                    <p className='cards-uls-border'>Property Type<Image src={Down} alt=""/></p>
                    <p>Price<Image src={Down} alt=""/></p>
                </div>
            </div>
            <div className='cards-list'>
                <Card img={OneCard}/>
                <Card img={TwoCard}/>
                <Card img={ThreeCard}/>
                <Card img={FourCard}/>
                <Card img={OneCard}/>
                <Card img={SixCard}/>
            </div> 
        </div>
    </div>
  )
}

export default Cards