import Item from "./Item"
import styles from '../styles/List.module.css'

const List = ({items}) => {
    
  return (
    <div className={styles.list}>
        {items.map(item => (
        <Item
            key={item.id}
            item={item}
        />
    ))}
        
        </div>
  )
}

export default List