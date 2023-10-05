
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
   <p>Craft exceptional mobile experiences that engage users and drive results.</p>
          </div>  
          <div>
          <Image
                            src='/Ecommerce Website.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Web Development
         </h1>
   <p>Create stunning websites and web applications that captivate your audience.</p>
          </div>


          <div>
          <Image
                            src='/Data Search.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Artificial Intelligence
         </h1>
   <p>Harness the power of AI to automate tasks, gain insights, and enhance decision-making and free yourself from manual operations.</p>
          </div>


          <div>
          <Image
                            src='/Saly-12.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         IT Project Outsourcing
         </h1>
   <p>Augment your team with our skilled professionals to boost productivity and efficiency and remain hassle-free from lengthy hiring procedures.</p>
          </div>


          <div>
          <Image
                            src='/Saly-12.svg'
                            width={64}
                            height={64}
                            alt="service1-web"
                        />
         <h1>
         Staff Augmentation
         </h1>
   <p>Access top talented teams on-demand to accelerate your projects.</p>
          </div>
        </div>
             

        </section>
        </>
    )
}

export default Services