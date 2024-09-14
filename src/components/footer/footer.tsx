import React from 'react'
import './footer.css'
import Image from "next/image";
import { ArrowWhite, Logo } from '@/img/index'
import FooterText from './footer-text';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-wrap'>
            <div className='footer-one'>
                <h2>Make your dreams a <span className='orange'>reality</span></h2>
                <button className='btn-orange'>
                    Work with us
                    <Image src={ArrowWhite} alt=""/>
                </button>
            </div>
            <div className='footer-two'>
                <div className='footer-copy'>
                  <Image src={Logo} alt='logo'></Image>
                </div>
                <div className='footer-copy'>
                  <FooterText/>
                  <FooterText/>
                  <FooterText/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer