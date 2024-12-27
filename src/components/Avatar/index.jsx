import Image from "next/image"
import styles from "./avatar.module.css"

export const Avatar = ({name, imageSrc}) => {
  return (
    <div>
        <ul className={styles.avatar}>
            <li>
                <Image src={imageSrc} alt={name} width={32} height={32}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    </div>
  )
}
