'use client'
import styles from '@/app/styles/Banner.module.css'
import Image from 'next/image'
import {Proza_Libre } from 'next/font/google'
import {Inter } from 'next/font/google'
import { Link as ScrollLink } from 'react-scroll'
import { useState } from 'react'


 
const roboto1 = Proza_Libre({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

 
const roboto2= Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



const Banner=()=>{

  const [activeSection, setActiveSection] = useState('home');

 

  const handleMenuClick = (sectionName:any) => {
    setActiveSection(sectionName);
  };

    return(
        <>
         <div className={styles.banner_sec} id='home'>
                <div className={styles.leftCont}>
                    <h1  className={roboto1.className}>AI-Enhanced Solutions for the Future of IT </h1>
                    <p>  Our AI-powered solutions make IT work better. They speed things up, handle tasks automatically, and make everything more efficient, setting new standards in the IT world.
</p>
<ScrollLink
                  to='faqs'
                  spy={true}
                  smooth={true}
                  duration={300}
                  activeClass='active'
                  onClick={() => handleMenuClick('faqs')}
                >
                     <button>Explore Now</button>
</ScrollLink>
                </div>
                <div className={styles.ritCont}>
                <Image
                            className={styles.banner_img}
                            src='banner-image.svg'
                            width={800}
                            height={800}
                            alt="bannner-web"
                        />

                </div>


         </div>
        
        </>
    )
}

export default Banner