import styles from './TaskList.module.css'
import trash from '../assets/trash.svg'

export function TaskList(props) {
    return (
        <>
            <div className={styles.taskList}>
                <div>
                    <input type="checkbox" />
                </div>
                <p>
                    {props.content}
                </p>
                <div>
                    <img src={trash} alt="" />
                </div>
            </div>
        </>
    )
}