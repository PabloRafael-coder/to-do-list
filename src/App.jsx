import styles from './App.module.css'

import rocket from './assets/rocket.svg'
import "./global.css"
function App() {

  return (
    <>
      <header className={styles.header}>
        <img src={rocket} alt="imagem de um foguete" />
        <h1 className={styles.headerText}>to<span>do</span></h1>
      </header>
      <main>
        <div className={styles.taskInputContainer}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </div>
      </main>
    </>
  )
}

export default App
