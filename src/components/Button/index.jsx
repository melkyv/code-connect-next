import styles from './button.module.css'
export const Button = ({ children, ...props }) => {
    return <button {...props} className={styles.btn}>
        {children}
    </button>
}