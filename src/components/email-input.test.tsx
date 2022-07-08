import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import EmailInput from "./email-input";

describe('Email Input', () => {

    let email: string | undefined = undefined;
    const setEmail = (e: string | undefined): void => {
        email = e;
    }

    beforeEach(() => {
        email = undefined;
    });

    test('should render', () => {
        render(<EmailInput setEmail={setEmail}/>);

        expect(screen.getByTestId("email")).toBeInTheDocument();
    });

    test('should show error if empty', () => {
        render(<EmailInput setEmail={setEmail}/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "aa"}})
        fireEvent.change(emailInput, {target: {value: ""}})

        expect(screen.getByText("Email cannot be empty.")).toBeInTheDocument();
        expect(email).toBeUndefined()
    });

    test('should show error if no @ in email', () => {
        render(<EmailInput setEmail={setEmail}/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "test.se"}})

        expect(screen.getByText("Email need to include @.")).toBeInTheDocument();
        expect(email).toBeUndefined()
    });

    test('should hide error when not empty', () => {
        render(<EmailInput setEmail={setEmail}/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "aa"}})
        fireEvent.change(emailInput, {target: {value: ""}})
        expect(screen.getByText("Email cannot be empty.")).toBeInTheDocument();

        fireEvent.change(emailInput, {target: {value: "aa"}})
        expect(screen.queryByText("Email cannot be empty.")).not.toBeInTheDocument()
        expect(email).toBeUndefined()
    })

    test('should set email', () => {
        render(<EmailInput setEmail={setEmail}/>);

        const emailInput = screen.getByTestId("email")
        fireEvent.change(emailInput, {target: {value: "test@mail.se"}})
        expect(email).toEqual("test@mail.se")
    })
})