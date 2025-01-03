import styles from './textarea.module.css'

export const TextArea = ({ children, ...props }) => {
  return (
    <textarea className={styles.textarea} {...props}>
      {children}
    </textarea>
  )
}
