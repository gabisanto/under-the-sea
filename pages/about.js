import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/about.module.css'

const about = () => {
  return (
    <Layout
    page="About"
  >
  {/* here goes children */}
  <main className="contenedor">
    <h2 className="heading">About us</h2>
    <div className={styles.content}>
        <Image layout="responsive" width={648} height={450} src="/img/nosotros.jpg"/>
      <div>
        <p>
          

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis nisl vitae ligula fringilla, vulputate efficitur urna vulputate. Sed tempor, risus et posuere porttitor, ligula quam blandit eros, ac malesuada est urna et eros. Nullam ultrices tincidunt metus a congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ex ut congue scelerisque. Morbi vitae purus in velit porta auctor sit amet eget purus. Mauris convallis congue nibh, id condimentum magna bibendum a. </p>
            <p>            Pellentesque luctus velit pharetra metus egestas, non ullamcorper neque placerat. Pellentesque convallis lorem nec est sollicitudin, non varius nisl vestibulum. Donec quis suscipit sapien. Pellentesque sed felis at leo fermentum aliquet feugiat et lorem. Vestibulum congue, felis id congue posuere, arcu sapien euismod lacus, et ullamcorper sapien erat et ante. Suspendisse sed lacus molestie, pellentesque odio nec, tempor dui. Quisque efficitur ac nisi nec rhoncus. 
        </p>
      </div>

    </div>
  </main>
  </Layout>
  )
}

export default about