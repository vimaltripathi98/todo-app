import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AddTask from "./Components/AddTask"
import Task from "./Components/Task"

import Filter from "./Components/Filter"


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('adds a task when submitted', () => {
  const addTask = jest.fn();
  render(<AddTask addTask={addTask} />);

  const input = screen.getByPlaceholderText('Add a new task');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  expect(addTask).toHaveBeenCalledWith('New Task');
});



test('toggles task completion when checkbox is clicked', () => {
  const toggleTaskCompletion = jest.fn();
  const task = { id: 1, text: 'Test Task', completed: false };
  render(<Task task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={() => { }} editTask={() => { }} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(toggleTaskCompletion).toHaveBeenCalledWith(1);
});



test('changes filter when button is clicked', () => {
  const setFilter = jest.fn();
  render(<Filter setFilter={setFilter} />);

  const allButton = screen.getByText('All');
  fireEvent.click(allButton);

  expect(setFilter).toHaveBeenCalledWith('All');
});