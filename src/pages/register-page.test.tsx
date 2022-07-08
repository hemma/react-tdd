import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Register from "./register-page";

describe('Register component', () => {
    test('should render', () => {
        render(<Register />);

        expect(screen.getByText('Register')).toBeInTheDocument();
    });

    test('should render', () => {
        render(<Register />);

        expect(screen.getByText('Register')).toBeInTheDocument();
    });
})