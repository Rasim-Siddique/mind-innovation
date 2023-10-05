import styles from '@/app/styles/Banner.module.css'
import Image from 'next/image'

const Banner=()=>{
    return(
        <>
         <div className={styles.banner_sec} id='home'>
                <div className={styles.leftCont}>
                    <h1>Your  Best IT Partner </h1>
                    <p>From custom software development to project management, our team of experts is dedicated to delivering solutions that are tailored to your unique needs.</p>
                     <button>Explore Now</button>

                </div>
                <div className={styles.ritCont}>
                <Image
                            className={styles.banner_img}
                            src='/pngtree-modern-flat-design-concept-of-hiring-and-online-recruitment-with-characters-png-image_5332878.jpg'
                            width={600}
                            height={600}
                            alt="bannner-web"
                        />

                </div>


         </div>
        
        </>
    )
}

export default Banner