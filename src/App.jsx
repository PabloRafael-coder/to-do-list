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
        <section className={styles.taskInputContainer}>
          <input className={styles.taskInput} type="text" placeholder="Adicione uma nova tarefa" />
          <button className={styles.taskInputButton}>Criar <img src={plus} /></button>
        </section>
        <div className={styles.taskListContainer}>
          <header>
            <p>Tarefas criadas<span>0</span></p>
            <p>Concluídas<span>0</span></p>
          </header>
          <div>
            <img src={clipboard} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
