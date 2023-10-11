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
                     
                  <h1>German Invoice Data Extraction</h1>
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
                     
                  <h1>Number Plate Detection</h1>
                  <p>The photographer wants to automatically organize auto racing images into folders named after each vehicles number plate.</p>


                    </div>    

                    <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-imageThird.svg'
                            width={556}
                            height={335}
                            alt="ai-web"
                        />
                     
                  <h1>WSDA SQL Game</h1>
                  <p>Walter Shield Data Academy helps students transform their data skills and achieve their goals by offering SQL games.</p>


                    </div>   

                    <div className={styles.singlePro_card}>
                      <Image
                      className={styles.imgsBoximg}
                            src='/ai-imageforth.svg'
                            width={556}
                            height={335}
                            alt="ai-web"
                        />
                     
                  <h1>TimeHive</h1>
                  <p>TimeHive is an attendance management app that helps employees keep track of their attendance.</p>


                    </div>   
         </div>
        </section>
        </>
    )
}

export default Project