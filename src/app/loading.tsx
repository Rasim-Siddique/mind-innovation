import styles from '@/app/styles/Loading.module.css'


const Loading=()=>{
    return(
        <>
        <section className={styles.loading_section}>
        <div className={styles.lds_hourglass}></div>
        </section>
        </>
    )
}

export default Loading