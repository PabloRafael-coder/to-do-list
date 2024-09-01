import styles from './TaskList.module.css'
import { Trash } from '@phosphor-icons/react'

export function TaskList({ content, onDeleteTask }) {

    function handleDeleteTask() {
        onDeleteTask(content);
    }

    return (
        <>
            <div className={styles.taskElementContainer}>
                <div className={styles.inputContainer}>
                    <input type="checkbox"></input>
                </div>
                <div className={styles.textContainer}>
                    <p>{content}</p>
                </div>
                <button onClick={handleDeleteTask} className={styles.trashContainer}>
                    <Trash size={16} className={styles.colorTrash} />
                </button>
            </div>
        </>
    )
}