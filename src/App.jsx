import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { v4 as uuid4 } from 'uuid'

import rocket from './assets/rocket.svg'
import plus from './assets/plus.svg';
import clipboard from './assets/Clipboard.svg'

import styles from './App.module.css'
import "./global.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [tasksNumberCompleted, setTasksNumberCompleted] = useState(0)

  function increaseNumberCompletedTasks(isChecked) {
    setTasksNumberCompleted(number => isChecked ? number + 1 : number - 1)
  }

  function handleCreateNewTask(event) {
    event.preventDefault();

    const newTask = { id: uuid4(), title: newTaskText, isCompleted: false }

    setTasks([...tasks, newTask])
    setNewTaskText('');
  }

  function handleNewValueTask(event) {
    setNewTaskText(event.target.value);
  }

  function DeleteTask(isChecked, idDeleted) {

    const taskWithoutDeleted = tasks.filter(task => {
      return task.id !== idDeleted
    })

    setTasks(taskWithoutDeleted)
    setTasksNumberCompleted(number => isChecked ? number - 1 : number)
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
              onChange={handleNewValueTask}
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
              <p className={styles.headerTextCompleted}>Concluídas<span>{tasksNumberCompleted} de {tasks.length}</span></p>
            </header>
            <div className={styles.taskListCreate}>
              {
                tasks.length > 0 ?
                  (
                    tasks.map(task => {
                      return (<TaskList
                        key={task.id}
                        idDeleted={task.id}
                        content={task.title}
                        onDeleteTask={DeleteTask}
                        isChecked={task.isCompleted}
                        onIncreaseNumberCompletedTasks={increaseNumberCompletedTasks}
                      />
                      )
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
