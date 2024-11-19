import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from "./AddTask"

test('adds a task when submitted', () => {
    const addTask = jest.fn();
    render(<AddTask addTask={addTask} />);

    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(addTask).toHaveBeenCalledWith('New Task');
});