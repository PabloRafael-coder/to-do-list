import styles from './TaskList.module.css'
import { Trash } from '@phosphor-icons/react'

export function TaskList({ content }) {
    return (
        <>
            <div className={styles.taskElementContainer}>
                <div className={styles.inputContainer}>
                    <input type="checkbox" />
                </div>
                <div className={styles.textContainer}>
                    <p>{content}</p>
                </div>
                <div className={styles.trashContainer}>
                    <Trash className={styles.colorTrash} />
                </div>
            </div>
        </>
    )
}