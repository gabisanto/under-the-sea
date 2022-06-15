import styles from '../styles/Certification.module.css'

const Certification = ({certifications}) => {
  const {title, information, image} = certifications
  return (
    <section>
        < div className={`contenedor ${styles.grid}`}>
            <div className={styles.content}>
                <h2 className='heading'>{title}</h2>  
                <p>{information}</p>  
                <a href="#" className={styles.link}>More information</a>
            </div>
        </div>
        {/* I had to style the image coming from the api fetch, there were some possible solutions but this one was pretty cool and clean. Also I had never used it so something new learnt */}
        <style jsx>{`
            section {
                padding: 10rem 0;
                margin-top:10rem;
                background-image: linear-gradient(to right,rgb(0 0 0 / .4),rgb(0 0 0 / .7)),url(${image.url});
                background-size: cover;
                background-position:50%
            }
        `}</style>
    </section>
  )
}

export default Certification