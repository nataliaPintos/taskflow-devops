import { useState } from 'react'

interface Task {
  id: number
  title: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')

  function addTask() {
    const title = task.trim()

    if (!title) return

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title },
    ])

    setTask('')
  }

  function removeTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    )
  }

  return (
    <main>
      <section className="taskflow">
        <h1>TaskFlow</h1>
        <p>Gerencie suas tarefas de forma simples.</p>

        <div className="task-form">
          <label htmlFor="task">Nova tarefa</label>
          <div className="task-input">
            <input
              id="task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              placeholder="Digite uma tarefa"
              onKeyDown={(event) => {
                if (event.key === 'Enter') addTask()
              }}
            />
            <button type="button" onClick={addTask}>
              Adicionar
            </button>
          </div>
        </div>

        {tasks.length === 0 ? (
          <p className="empty">Nenhuma tarefa cadastrada.</p>
        ) : (
          <ul>
            {tasks.map((item) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <button
                  type="button"
                  onClick={() => removeTask(item.id)}
                  aria-label={`Remover ${item.title}`}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
