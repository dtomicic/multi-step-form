import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={styles.container}>
        <div className={styles.formSection}>
            <label className={styles.formLabel} htmlFor="name">Name</label>
            <input className={styles.formInput} type="text" name="name" id="name" placeholder='e.g. Stephen King' required />
        </div>
        <div className={styles.formSection}>
            <label className={styles.formLabel} htmlFor="email">Email Address</label>
            <input className={styles.formInput} type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com' required />
        </div>
        <div className={styles.formSection}>
            <label className={styles.formLabel} htmlFor="number">Phone number</label>
            <input className={styles.formInput} type="text" name="Phone number" id="number" placeholder='e.g. +1 234 567 890' required />
        </div>
    </form>
  )
}
export default Form