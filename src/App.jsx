import styles from './App.module.css'

import rocket from './assets/rocket.svg'
import plus from './assets/plus.svg';
import clipboard from './assets/Clipboard.svg'
import "./global.css"
import { TaskList } from './components/TaskList';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTaskText])
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={rocket} alt="imagem de um foguete" />
        <h1 className={styles.headerTitle}>to<span>do</span></h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleCreateNewTask} className={styles.taskInputContainer}>
            <input
              onChange={handleNewTaskChange}
              className={styles.taskInput}
              name='task'
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
            />
            <button className={styles.taskInputButton}>Criar<img src={plus} /></button>
          </form>
          <div className={styles.taskListContainer}>
            <header className={styles.taskListHeader}>
              <p className={styles.headerTextCreated}>Tarefas criadas<span>0</span></p>
              <p className={styles.headerTextCompleted}>Concluídas<span>0</span></p>
            </header>
            <div className={styles.taskListContent}>
              {
                tasks.map(task => {
                  return <TaskList content={task} />
                })
              }
              <img src={clipboard} />
              <div className={styles.contentListText}>
                <p className={styles.taskListText}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
