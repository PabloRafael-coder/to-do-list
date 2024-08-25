import styles from './TaskList.module.css'
import trash from '../assets/trash.svg'

export function TaskList(props) {
    return (
        <>
            <div className={styles.taskList}>
                <input type="checkbox" />
                <p>{props.content}</p>
                <img src={trash} alt="" />
            </div>
        </>
    )
}