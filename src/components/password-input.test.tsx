import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import PasswordInput from "./password-input";

describe('Email Input', () => {

    let password: string | undefined = undefined;
    const setPassword = (p: string | undefined): void => {
        password = p;
    }

    beforeEach(() => {
        password = undefined;
    });

    test('should render', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        expect(screen.getByTestId("password")).toBeInTheDocument();
    });

    test('should show error if empty', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        const passwordInput = screen.getByTestId("password")
        fireEvent.change(passwordInput, {target: {value: "aa"}})
        fireEvent.change(passwordInput, {target: {value: ""}})

        expect(screen.getByText("Password cannot be empty.")).toBeInTheDocument();
        expect(password).toBeUndefined()
    });

    test('should show error if less than five', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        const passwordInput = screen.getByTestId("password")
        fireEvent.change(passwordInput, {target: {value: "1234"}})

        expect(screen.getByText("Password needs to be at least 5 chars.")).toBeInTheDocument();
        expect(password).toBeUndefined()
    });

    test('should show error if not same password', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        const passwordInput = screen.getByTestId("password")
        const passwordInputConfirm = screen.getByTestId("confirm_password")
        fireEvent.change(passwordInput, {target: {value: "12345"}})
        fireEvent.change(passwordInputConfirm, {target: {value: "12344"}})

        expect(screen.getByText("Passwords needs to be the same.")).toBeInTheDocument();
        expect(password).toBeUndefined()
    });

    test('should hide error when not empty', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        const passwordInput = screen.getByTestId("password")
        fireEvent.change(passwordInput, {target: {value: "aa"}})
        fireEvent.change(passwordInput, {target: {value: ""}})
        expect(screen.getByText("Password cannot be empty.")).toBeInTheDocument();

        fireEvent.change(passwordInput, {target: {value: "aa"}})
        expect(screen.queryByText("Password cannot be empty.")).not.toBeInTheDocument()
        expect(password).toBeUndefined()
    })

    test('should set password', () => {
        render(<PasswordInput setPassword={setPassword}/>);

        const passwordInput = screen.getByTestId("password")
        const passwordInputConfirm = screen.getByTestId("confirm_password")
        fireEvent.change(passwordInput, {target: {value: "12345!"}})
        fireEvent.change(passwordInputConfirm, {target: {value: "12345!"}})
        expect(password).toEqual("12345!")
    })
})