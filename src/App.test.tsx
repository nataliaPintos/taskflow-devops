import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import App from './App'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})

describe('TaskFlow', () => {
  it('deve adicionar uma nova tarefa', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Digite uma tarefa')
    const botaoAdicionar = screen.getByRole('button', {
      name: 'Adicionar',
    })

    fireEvent.change(input, {
      target: { value: 'Estudar DevOps' },
    })

    fireEvent.click(botaoAdicionar)

    expect(screen.getByText('Estudar DevOps')).toBeInTheDocument()
  })

  it('não deve adicionar uma tarefa vazia', () => {
    render(<App />)

    const botaoAdicionar = screen.getByRole('button', {
      name: 'Adicionar',
    })

    fireEvent.click(botaoAdicionar)

    expect(
      screen.getByText('Nenhuma tarefa cadastrada.')
    ).toBeInTheDocument()
  })

  it('deve remover uma tarefa', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Digite uma tarefa')
    const botaoAdicionar = screen.getByRole('button', {
      name: 'Adicionar',
    })

    fireEvent.change(input, {
      target: { value: 'Estudar DevOps' },
    })

    fireEvent.click(botaoAdicionar)

    const botaoRemover = screen.getByRole('button', {
      name: /remover estudar devops/i,
    })

    fireEvent.click(botaoRemover)

    expect(
      screen.queryByText('Estudar DevOps')
    ).not.toBeInTheDocument()
  })
})