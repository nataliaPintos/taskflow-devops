import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('TaskFlow', () => {
  it('deve adicionar uma nova tarefa', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByPlaceholderText('Digite uma tarefa'),
      'Estudar DevOps',
    )

    await user.click(
      screen.getByRole('button', { name: 'Adicionar' }),
    )

    expect(screen.getByText('Estudar DevOps')).toBeInTheDocument()
  })

  it('deve remover uma tarefa', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(
      screen.getByPlaceholderText('Digite uma tarefa'),
      'Estudar DevOps',
    )

    await user.click(
      screen.getByRole('button', { name: 'Adicionar' }),
    )

    await user.click(
      screen.getByRole('button', {
        name: 'Remover Estudar DevOps',
      }),
    )

    expect(screen.queryByText('Estudar DevOps')).not.toBeInTheDocument()
  })

  it('não deve adicionar uma tarefa vazia', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', { name: 'Adicionar' }),
    )

    expect(
      screen.getByText('Nenhuma tarefa cadastrada.'),
    ).toBeInTheDocument()
  })
})
