import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import EmailInput from "./email-input";

describe('Email Input', () => {
    test('should render', () => {
        render(<EmailInput />);

        expect(screen.getByTestId("email")).toBeInTheDocument();
    });

    test('should show error if empty', () => {
        render(<EmailInput />);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: { value: "aa" }})
        fireEvent.change(emailInput, {target: { value: "" }})

        expect(screen.getByText("Email cannot be empty.")).toBeInTheDocument();
    });

    test('should hide error when not empty', () => {
        render(<EmailInput />);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: { value: "aa" }})
        fireEvent.change(emailInput, {target: { value: "" }})
        expect(screen.getByText("Email cannot be empty.")).toBeInTheDocument();

        fireEvent.change(emailInput, {target: { value: "aa" }})
        expect(screen.queryByText("Email cannot be empty.")).not.toBeInTheDocument()
    })
})