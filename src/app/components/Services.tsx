import styles from '@/app/styles/Services.module.css'
import Image from 'next/image'


const Services=()=>{
    return(
        <>
        <section className={styles.serviceSec} id='services'>
            <h1>Our Top Services</h1>
        <div className={styles.serviceCard}>
          <div>
          <Image
                            src='/Employee Competition.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Mobile App Development
         </h1>
   <p>Create or enhance mobile applications, ensuring optimized user experience.</p>
          </div>  
          <div>
          <Image
                            src='/Ecommerce Website.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Mobile App Development
         </h1>
   <p>Create or enhance mobile applications, ensuring optimized user experience.</p>
          </div>


          <div>
          <Image
                            src='/Data Search.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Mobile App Development
         </h1>
   <p>Create or enhance mobile applications, ensuring optimized user experience.</p>
          </div>


          <div>
          <Image
                            src='/Saly-12.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Mobile App Development
         </h1>
   <p>Create or enhance mobile applications, ensuring optimized user experience.</p>
          </div>


          <div>
          <Image
                            src='/Saly-12.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Mobile App Development
         </h1>
   <p>Create or enhance mobile applications, ensuring optimized user experience.</p>
          </div>
        </div>
             

        </section>
        </>
    )
}

export default Services