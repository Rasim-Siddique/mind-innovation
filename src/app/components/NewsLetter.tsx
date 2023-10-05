import styles from '@/app/styles/NewsLetter.module.css'
import Image from 'next/image'

const NewsLetter=()=>{
    return(
        <>
         <section style={{background:'#173E43'}} className={styles.newsLetSec}>
            <div className={styles.main_sec_newsLet}>
                <div>
                    <h1>Subscribe our Newsletter</h1>
                    <p>Stay up-to-date with the latest tech trends, insights, and updates from Mind Innovation. Join our newsletter to receive valuable information directly in your inbox.</p>
                   <div className={styles.subscribeLetMn}>
                    <input type="text" placeholder='Enter Your email Address' />
                    <button>Subscribe</button>
                   </div>
                </div>
                <div>
                <Image
                            className={styles.banner_img}
                            src='/Envelope Mail.svg'
                            width={256}
                            height={256}
                            alt="envelope-web"
                        />
                </div>

            </div>
        </section>
        </>
    )
}
export default NewsLetter