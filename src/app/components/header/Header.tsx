'use client'
import { Link as ScrollLink, Element, Events, scrollSpy } from 'react-scroll';
import { useEffect, useState } from 'react';
import styles from '@/app/styles/Header.module.css';
import ImageLogo from '@/app/components/ImageLogo';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

 

  const handleMenuClick = (sectionName:any) => {
    setActiveSection(sectionName);
  };

  return (
    <section id='home'>
      <header className={styles.header} style={{ background: 'white' }}>
        <div className={styles.mn_hd_cntr}>
          <div className={styles.logo_cntr}>
            <ImageLogo logoSrc="/mind innovation dark 2.svg" />
          </div>
          <div className={styles.menu_cntr}>
            <ul>
            <ScrollLink
                  to='home'
                  spy={true}
                  smooth={true}
                  duration={300}
                  activeClass='active'
                  onClick={() => handleMenuClick('home')}
                >
              <li style={{ color: activeSection === 'home' ? 'black' : 'gray' }} className={`${styles.menu_cntr_list}`}>
               
                  Home
              </li>
              </ScrollLink>
              <ScrollLink
                  to='projects'
                  spy={true}
                  smooth={true}
                  duration={300}
                  activeClass='active'
                  onClick={() => handleMenuClick('projects')}
                >
              <li style={{ color: activeSection === 'projects' ? 'black' : 'gray' }} className={styles.menu_cntr_list}>
               
                  Projects
              </li>
              </ScrollLink>
              <ScrollLink
                  to='about-us'
                  spy={true}
                  smooth={true}
                  duration={300}
                  activeClass='active'
                  onClick={() => handleMenuClick('about-us')}
                >
              <li style={{ color: activeSection === 'about-us' ? 'black' : 'gray' }} className={styles.menu_cntr_list}>
               
                  About Us
              </li>
              </ScrollLink>
              <ScrollLink
                  to='services'
                  spy={true}
                  smooth={true}
                  duration={300}
                  activeClass='active'
                  onClick={() => handleMenuClick('services')}
                >
              <li style={{ color: activeSection === 'services' ? 'black' : 'gray' }} className={styles.menu_cntr_list}>
             
                  Services
              </li>
              </ScrollLink>

              <ScrollLink
                    to='footer'
                    spy={true}
                    smooth={true}
                    duration={300}
                    activeClass='active'
                    onClick={() => handleMenuClick('footer')}
                  >
              <li style={{ color: activeSection === 'footer' ? 'red' : 'gray' }}>
                <button>
                
                    Contact Us
                </button>
              </li>
              </ScrollLink>

            </ul>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
