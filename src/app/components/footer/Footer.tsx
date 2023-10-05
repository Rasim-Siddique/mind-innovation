import styles from '@/app/styles/Footer.module.css'
import ImageLogo from '@/app/components/ImageLogo';
import Image from 'next/image';

const Footer=()=>{
    return(
        <>

        <footer style={{background:'#0F2C30', height:418}} className={styles.ftbox} id='footer'>
            <div className={styles.mn_cont__ftbox}>
                <div className={styles.lft_cont__ftbox}>
                <ImageLogo logoSrc="/mind innovation light 1.svg" />
                <p>Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</p>
                 <div>
                 <Image
                            className={styles.logo_img}
                            src='/linkedin.svg'
                            width={32}
                            height={32}
                            alt="logo-web"
                        />
                        <Image
                            className={styles.logo_img}
                            src='facebook.svg'
                            width={32}
                            height={32}
                            alt="logo-web"
                        />
                        <Image
                            className={styles.logo_img}
                            src='twitter.svg'
                            width={32}
                            height={32}
                            alt="logo-web"
                        />
                        <Image
                            className={styles.logo_img}
                            src="instagram.svg"
                            width={32}
                            height={32}
                            alt="logo-web"
                        />
                 </div>
                </div>
                <div className={styles.rit_cont__ftbox}>
                    <ul>
                        <li>
                            <h1>Contacts</h1>
                        </li>

<li>
  <Image
    className={styles.logo_img}
    src='/sms.svg'
    width={24}
    height={24}
    alt="logo-web"
  />
  <a style={{color:'white', textDecoration:'none'}} href="mailto:info@inaequo.net">info@inaequo.net</a>
</li>
                        <li>
                        <Image
                            className={styles.logo_img}
                            src='/call.svg'
                            width={24}
                            height={24}
                            alt="logo-web"
                        />
                        <p>+92 3345550977</p>
                        </li>
                        <li>
                        <Image
                            className={styles.logo_img}
                            src='/location.svg'
                            width={24}
                            height={24}
                            alt="logo-web"
                        />
                        <p>Karachi, Pakistan.</p>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={styles.line_hor}></div>
            <div className={styles.copyrightBx}>
                <p>Copyright © 2023 for mindinnovation. All rights reserved.</p>
            </div>

        </footer>
       
        </>
    )
}

export default Footer