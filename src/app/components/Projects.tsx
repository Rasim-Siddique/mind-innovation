import styles from '@/app/styles/Project.module.css'
import Image from 'next/image'

const Project=()=>{
    return(
        <>
        <section className={styles.projectSec} id='projects'>  
         <h1>Our Projects</h1>
         <div className={styles.projectsCard}>
                <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-image.svg'
                            width={556}
                            height={335}
                            alt="ai-web"
                        />
                     
                  <h1>German invoice data extraction</h1>
                  <p>The project aims to streamline and simplify the process of inputting invoice data for clients.</p>


                    </div>     
                    <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-imagesec.svg'
                            width={556}
                            height={335}
                            alt="ai2-web"
                        />
                     
                  <h1>German invoice data extraction</h1>
                  <p>The project aims to streamline and simplify the process of inputting invoice data for clients.</p>


                    </div>    

                    <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-imageThird.svg'
                            width={556}
                            height={335}
                            alt="ai-web"
                        />
                     
                  <h1>German invoice data extraction</h1>
                  <p>The project aims to streamline and simplify the process of inputting invoice data for clients.</p>


                    </div>   

                    <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-imageforth.svg'
                            width={556}
                            height={335}
                            alt="ai-web"
                        />
                     
                  <h1>German invoice data extraction</h1>
                  <p>The project aims to streamline and simplify the process of inputting invoice data for clients.</p>


                    </div>   
         </div>
        </section>
        </>
    )
}

export default Project