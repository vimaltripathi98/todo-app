import { render, screen, fireEvent } from '@testing-library/react';
import Filter from "./Filter"


test('changes filter when button is clicked', () => {
    const setFilter = jest.fn();
    render(<Filter setFilter={setFilter} />);

    const allButton = screen.getByText('All');
    fireEvent.click(allButton);

    expect(setFilter).toHaveBeenCalledWith('All');
});