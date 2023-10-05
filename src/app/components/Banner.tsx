

import styles from '@/app/styles/Banner.module.css'
import Image from 'next/image'

const Banner=()=>{
    return(
        <>
         <div className={styles.banner_sec} id='home'>
                <div className={styles.leftCont}>
                    <h1>AI-Enhanced Solutions for the Future of IT </h1>
                    <p>Our AI-powered solutions make IT work better. They speed things up, handle tasks automatically, and make everything more efficient, setting new standards in the IT world.
</p>
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