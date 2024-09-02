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

  function handleCreateNewTask(event) {
    event.preventDefault();

    const newTask = { text: newTaskText, completed: false }
    setTasks([...tasks, newTask])
    setNewTaskText('');
  }

  function handleNewTaskChange(event) {
    setNewTaskText(event.target.value);
  }

  function DeleteTask(taskDelete) {
    const taskWithoutDeleted = tasks.filter(task => {
      return task.text !== taskDelete
    })

    setTasks(taskWithoutDeleted)
  }

  return (
    <>
      <header className={styles.header}>
        <img src={rocket} alt="imagem de um foguete" />
        <h1 className={styles.headerTitle}>to<span>do</span></h1>
      </header>
      <main>
        <section>
          <form
            onSubmit={handleCreateNewTask}
            className={styles.taskInputContainer}>
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
              <p className={styles.headerTextCreated}>Tarefas criadas<span>{tasks.length}</span></p>
              <p className={styles.headerTextCompleted}>Concluídas<span>2 de {tasks.length}</span></p>
            </header>
            <div className={styles.taskListCreate}>
              {
                tasks.length > 0 ?
                  (
                    tasks.map(task => {
                      return <TaskList content={task.text} onDeleteTask={DeleteTask} />
                    })
                  ) :
                  (
                    <div className={styles.taskListContent}>
                      <img src={clipboard} />
                      <div className={styles.contentListText}>
                        <p
                          className={styles.taskListText}>
                          Você ainda não tem tarefas cadastradas
                        </p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                      </div>
                    </div>
                  )
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
