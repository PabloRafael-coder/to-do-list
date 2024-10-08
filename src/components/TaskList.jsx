import { useState } from 'react'
import { Trash } from '@phosphor-icons/react'
import styles from './TaskList.module.css'


export function TaskList({ content, onDeleteTask, isChecked, id, onToggleValueTaskCompletion }) {

    const [checked, setChecked] = useState(isChecked)

    function handleInputTask(event) {
        setChecked(event.target.checked)
        onToggleValueTaskCompletion(id, event.target.checked)
    }

    function handleDeleteTask() {
        onDeleteTask(id);
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