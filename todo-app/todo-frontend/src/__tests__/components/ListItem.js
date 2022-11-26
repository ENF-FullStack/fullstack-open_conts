import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import ListItem from '../../Todos/ListItem'

describe('TODO: not done', () => {
  const todo = {
    text: "dummy text",
    done: false
  }
  test('text renders correctly, buttons work', async () => {
    const deleteTodo = jest.fn();
    const completeTodo = jest.fn();
    render(<ListItem todo={todo} onClickDelete={deleteTodo} onClickComplete={completeTodo}/>);

    expect(screen.getByText('dummy text')).toBeInTheDocument();
    expect(screen.getByText('This todo is not done')).toBeInTheDocument();

    const user = userEvent.setup()
    const delButton = screen.getByText('Delete')
    await user.click(delButton)
    // expect(deleteTodo.mock.calls[0][0].length).toBe(1)
    expect(deleteTodo.mock.calls[0][0]).toStrictEqual({
      text: "dummy text",
      done: false
    })

    const doneButton = screen.getByText('Set as done')
    await user.click(doneButton)
    // expect(completeTodo.mock.calls[0][0].length).toBe(1)
    expect(completeTodo.mock.calls[0][0]).toStrictEqual({
      text: "dummy text",
      done: false
    })
  });
})