import { render, screen, fireEvent } from '@testing-library/react';
import Task from "./Task"



describe('Task Component', () => {
    test('toggles task completion when checkbox is clicked', () => {
        const toggleTaskCompletion = jest.fn();
        const task = { id: 1, text: 'Test Task', completed: false };
        render(<Task task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={() => { }} editTask={() => { }} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(toggleTaskCompletion).toHaveBeenCalledWith(1);
    });
});
