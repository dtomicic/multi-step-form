import React from 'react'
import styles from './SubToggle.module.css'

const SubToggle = ({active, setActive, content, setAddonArray}) => {

  const handleSub = (x) => {
    setActive(x);
    setAddonArray([{}])
  }

  return (
    <div className={styles.container}>
        {content.map((item) => (
            <h3 key={item} className={active === item ? `${styles['active']} ${styles['heading']}` : styles.heading} onClick={() => handleSub(item)}>{item}</h3>
        ))}
    </div>
  )
}
export default SubToggle