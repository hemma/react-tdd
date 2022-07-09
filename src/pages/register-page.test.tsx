import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Register from "./register-page";

describe('Register component', () => {
    test('should render', () => {
        render(<Register/>);

        expect(screen.getByText('Register')).toBeInTheDocument();
    });

    test('should disable button invalid email', () => {
        render(<Register/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "mail"}})

        expect(screen.getByTestId('submit')).toBeDisabled();
    });

    test('should disable button invalid password', () => {
        render(<Register/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "test@mail.se"}})

        const passwordInput = screen.getByTestId("password")
        fireEvent.change(passwordInput, {target: {value: "1234"}})

        expect(screen.getByTestId('submit')).toBeDisabled();
    });


    test('should enable button on valid input', () => {
        render(<Register/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "test@mail.se"}})

        const passwordInput = screen.getByTestId("password")
        fireEvent.change(passwordInput, {target: {value: "12345"}})
        const confirmPasswordInput = screen.getByTestId("confirm_password")
        fireEvent.change(confirmPasswordInput, {target: {value: "12345"}})

        expect(screen.getByTestId('submit')).toBeEnabled();
    });
})