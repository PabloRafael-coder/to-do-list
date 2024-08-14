import styles from './App.module.css'

import rocket from './assets/rocket.svg'
import plus from './assets/plus.svg';
import clipboard from './assets/Clipboard.svg'
import "./global.css"
function App() {

  return (
    <>
      <header className={styles.header}>
        <img src={rocket} alt="imagem de um foguete" />
        <h1 className={styles.headerTitle}>to<span>do</span></h1>
      </header>
      <main>
        <section>
          <div className={styles.taskInputContainer}>
            <input className={styles.taskInput} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.taskInputButton}>Criar <img src={plus} /></button>
          </div>
          <div className={styles.taskListContainer}>
            <header className={styles.taskListHeader}>
              <p className={styles.headerTextCreated}>Tarefas criadas<span>0</span></p>
              <p className={styles.headerTextCompleted}>Concluídas<span>0</span></p>
            </header>
            <div className={styles.taskListContent}>
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
