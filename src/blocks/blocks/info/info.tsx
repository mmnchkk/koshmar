import React from 'react'
import './info.css'
import Image from "next/image";
import Power from '@/img/carousel/power.svg'
import Carousel1 from '@/img/carousel/1.svg'
import Carousel2 from '@/img/carousel/2.svg'
import Carousel3 from '@/img/carousel/3.svg'
import Carousel4 from '@/img/carousel/4.svg'
import Carousel5 from '@/img/carousel/5.svg'
import Carousel6 from '@/img/carousel/6.svg'
import Carousel7 from '@/img/carousel/7.svg'
import { Bed, Shower, Size, House, ArrowOrange, ProfileAva } from '@/img';

const Info = () => {
  return (
    <div className='info'>
        <div className='info-wrap'>
            <div className='info-left'>
                <div>
                    <Image src={Power} alt="Loft"/>
                    <div className='carousel'>
                        <Image src={Carousel1} alt=""/>
                        <Image src={Carousel2} alt=""/>
                        <Image src={Carousel3} alt=""/>
                        <Image src={Carousel4} alt=""/>
                        <Image src={Carousel5} alt=""/>
                        <Image src={Carousel6} alt=""/>
                        <Image src={Carousel7} alt=""/>
                    </div>
                </div>
                <div className='details'>
                    <h5>Details</h5>
                    <div>
                        <p className='border-d'><Image src={Bed} alt=""/>4</p>
                        <p className='border-d'><Image src={Shower} alt=""/>2</p>
                        <p className='border-d'><Image src={Size} alt=""/>2</p>
                        <p className='border-d'><Image src={House} alt=""/>1</p>
                        <p>2007</p>
                    </div>
                </div>
                <div className='description'>
                    <h5>Description</h5>
                    <div className='description-desc'>
                        <p>At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.</p>
                        <p>Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.</p>
                        <p>Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.</p>   
                    </div>
                </div>
                <div className='features'>
                    <h5>Features</h5>
                    <div>
                        <ul>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                        </ul>
                        <ul>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                        </ul>
                        <ul>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                            <li>Air Conditioning</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='info-form'>
                <div className='profile'>
                    <Image src={ProfileAva} alt=""/>
                    <div>
                        <p className='name-profile'>Kayley Hall</p>
                        <p className='profile-orange'>View profile</p>
                    </div>
                </div>
                <form className='form'>
                    <input type="text" placeholder='Name'className='name'/>
                    <input type="phone" placeholder='Phone' className='phone'/>
                    <input type="email" placeholder='Email' className='email'/>
                    <input type="text" placeholder='Hello, I am interested in…'className='sms'/>
                    <button className='btn-black btn-form'>Learn more<Image src={ArrowOrange} alt=""/></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Info