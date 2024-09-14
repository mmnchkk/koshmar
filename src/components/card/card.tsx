import React from 'react'
import './card.css'
import Image from "next/image";
import { Bed, Shower, Size } from '@/img/index'

interface CardProps {
    img: string;
}
const Card = ({img}: CardProps) => {
  return (
    <div className='card'>
        <Image src={img} alt=""/>
        <p className='card-name'>Malto House</p>
        <div>
            <p className='border-p'><Image src={Bed} alt=""/>4</p>
            <p className='border-p'><Image src={Shower} alt=""/>2</p>
            <p><Image src={Size} alt=""/>2</p>
        </div>
    </div>
  )
}

export default Card