import styles from '@/app/styles/AboutUs.module.css'
import Image from 'next/image'

const AboutUs=()=>{
    return(
        <>
        <section className={styles.mnSecAbout} id='about-us'>
            <div className={styles.top_aboutHd}>
                <h1>Why Choose Us</h1>
            </div>
              
            <div className={styles.about_card}>
                <div>
                <Image
                            className={styles.banner_img}
                            src='/User Network.svg'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Expertise</h1>

                        <p>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>


                </div>
                <div>
                <Image
                            className={styles.banner_img}
                            src='/User Network.svg'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Expertise</h1>

                        <p>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>


                </div>

                <div>
                <Image
                            className={styles.banner_img}
                            src='/User Network.svg'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Expertise</h1>

                        <p>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>


                </div>

                <div>
                <Image
                            className={styles.banner_img}
                            src='/User Network.svg'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Expertise</h1>

                        <p>Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.</p>


                </div>

            </div>
   
    

        </section>
        <div className={styles.tehcMn}>
            <div className={styles.lfttehcMn}>
      <h1>We believe that <span> technology </span> can change the world</h1>
      <p>Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.</p>

        <div className={styles.successProSec}>
            <div>
                <h1>500+</h1>
                <p>Successfull Projects</p>

            </div>
            <div>
                <h1>98%</h1>
                <p>Satisfied Clients</p>

            </div>
            <div>
                <h1>98%</h1>
                <p>Satisfied Clients</p>

            </div>
        </div>

            </div>
            <div className={styles.rittehcMn}>

            <Image
                            className={styles.banner_img}
                            src='/Rectangle 4.svg'
                            width={534}
                            height={540}
                            alt="rectangle-web"
                        />
            </div>

          </div>
        </>
    )
}
export default AboutUs