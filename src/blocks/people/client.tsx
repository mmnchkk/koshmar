import React from 'react'
import Image from "next/image";
import { Oval } from '@/img';

const Client = () => {
  return (
    <div className='client'>
        <Image src={Oval} alt=''></Image>
        <div className='client-name'>
            <p className='h'>Lara Madrigal</p>
            <p className='c'>Client</p>
        </div>
    </div>
  )
}

export default Client