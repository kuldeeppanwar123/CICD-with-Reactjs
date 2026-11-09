import {fireEvent, render, screen } from '@testing-library/react'
import App from '../App';

test('render a component', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Get started/i);
    expect (linkElement).toBeInTheDocument();
})

test ('increase count on button click', () => {
    render(<App/>);
    const counterButton = screen.getByRole('button', { name: /count is 0/i });

    fireEvent.click(counterButton);

    expect(counterButton).toHaveTextContent('Count is 1');
})