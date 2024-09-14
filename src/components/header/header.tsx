import React  from 'react'
import { ROUTER } from '@/router/router.enum'
import Link from 'next/link';
import './header.css'
import Image from "next/image";
import { Logo, ArrowWhite } from '@/img/index'

const Header = () => {
  return (
    <div className='header'>
        <Link href={ROUTER.HOME}><Image src={Logo} alt='logo'></Image></Link>
        <div>
           <ul>
                <Link href={ROUTER.PAGETWO}><li>Nav Link</li></Link>
                <Link href={ROUTER.PAGETWO}><li>Nav Link</li></Link>
                <Link href={ROUTER.PAGETWO}><li>Nav Link</li></Link>
                <Link href={ROUTER.PAGETWO}><li>Nav Link</li></Link>
            </ul>
            <button className='btn-orange btn-header'>
                Work with us
                <Image src={ArrowWhite} alt=""/>
            </button> 
        </div>
    </div>
  )
}

export default Header