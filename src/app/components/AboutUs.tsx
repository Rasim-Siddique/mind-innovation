import styles from '@/app/styles/AboutUs.module.css'
import Image from 'next/image'

const AboutUs=()=>{
    return(
        <>
        <section className={styles.mnSecAbout} id='about-us'>
            <div className={styles.top_aboutHd}>
                <h1>Why Choose Mind Innovation?</h1>
            </div>
              
            <div className={styles.about_card}>
                <div className='single_abt_bx'>

                <Image
                            className={styles.banner_img}
                            src='/User Network.svg'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Expertise at Work</h1>

                        <p>With a team of experts at the forefront of technology trends, we offer in-depth knowledge and experience. Count on us to provide solutions that reflect our commitment to excellence.</p>


                </div>
                <div className='single_abt_bx'>
                <Image
                            className={styles.banner_img}
                            src='/tech.png'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Innovation Driven</h1>

                        <p>Innovation drives us. We are constantly exploring inventive solutions, from apps to AI, to solve problems creatively and add value to your projects.</p>


                </div>

                <div className='single_abt_bx'>
                <Image
                            className={styles.banner_img}
                            src='/results.png'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Results Oriented</h1>

                        <p>Our track record speaks for itself. We are dedicated to delivering measurable results that align with your business objectives, ensuring tangible success.</p>


                </div>

                <div className='single_abt_bx'>
                <Image
                            className={styles.banner_img}
                            src='/solutions.png'
                            width={128}
                            height={128}
                            alt="bannner-web"
                        />
                        <h1>Client-Centric</h1>

                        <p>We are not just a service provider; we are your dedicated partner. Our commitment to your success means we go the extra mile, paying attention to every detail to achieve your goals.</p>


                </div>

            </div>
   
    

        </section>
        <div className={styles.tehcMn}>
            <div className={styles.lfttehcMn}>
      <h1>We believe that <span> technology </span> can change the world</h1>
      <p>In an era, where technology has the potential to revolutionize industries and change lives, we stand at the forefront of innovation, driving change, and making a difference.</p>

        <div className={styles.successProSec}>
            <div>
                <h1>100+</h1>
                <p>Satisfied Clients</p>

            </div>
            <div>
                <h1>500+</h1>
                <p>Successfull Projects</p>

            </div>
            <div>
                <h1>10000+</h1>
                <p>Dedicated Hours Worked</p>

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