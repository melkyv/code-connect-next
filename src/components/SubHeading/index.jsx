import styles from './subheading.module.css'

export const SubHeading = ({children}) => {
  return (
    <h2 className={styles.h2}>
        {children}
    </h2>
  )
}
