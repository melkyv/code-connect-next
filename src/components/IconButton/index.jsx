import styles from './iconbutton.module.css'

export const IconButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.btn}>
        {children}
    </button>
  )
}
