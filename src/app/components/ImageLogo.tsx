import styles from '@/app/styles/Header.module.css'
import Image from "next/image"

interface LogoSrc{
    logoSrc:string
}

const ImageLogo=({logoSrc}:LogoSrc)=>{
    return(
        <>
                    <Image
                            className={styles.logo_img}
                            src={logoSrc}
                            width={500}
                            height={500}
                            alt="logo-web"
                        />
        </>
    )
}
export default ImageLogo