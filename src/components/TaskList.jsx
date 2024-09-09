import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'


export function TaskList({ content, onDeleteTask, isChecked, onIncreaseNumberCompletedTasks, idDeleted }) {
    const [checked, setChecked] = useState(isChecked)

    function handleInputTask(event) {
        const taskChecked = event.target.checked
        setChecked(taskChecked)
        onIncreaseNumberCompletedTasks(taskChecked)
    }

    function handleDeleteTask() {
        onDeleteTask(checked, idDeleted);
    }

    return (
        <>
            <div className={styles.taskElementContainer}>
                <div className={styles.inputContainer}>
                    <input type="checkbox" checked={checked} onChange={handleInputTask}></input>
                </div>
                <div className={styles.textContainer}>
                    <p className={checked ? styles.textDecorate : styles.textWithoutDecorate}>{content}</p>
                </div>
                <button onClick={handleDeleteTask} className={styles.trashContainer}>
                    <Trash size={16} className={styles.colorTrash} />
                </button>
            </div>
        </>
    )
}