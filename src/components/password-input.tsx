import React, {useEffect, useState} from 'react'
import {Box, FormField, TextInput} from 'grommet'
import {Lock} from 'grommet-icons'

const EMPTY_PASSWORD_ERROR = "Password cannot be empty."
const PASSWORD_LENGTH_ERROR = "Password needs to be at least 5 chars."
const PASSWORD_NOT_SAME_ERROR = "Passwords needs to be the same."


interface PasswordInputProps {
    setPassword(password: string | undefined): void;
}

function PasswordInput(props: PasswordInputProps) {
    const [error, setError] = useState<string | undefined>(undefined)

    const [password, setPassword] = useState<string | undefined>(undefined)
    const [confirmPassword, setConfirmPassword] = useState<string | undefined>(undefined)

    const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        const password = event.currentTarget.value.trim()
        setPassword(password)
    }

    const onChangeConfirmPassword = (event: React.FormEvent<HTMLInputElement>) => {
        const confirmPassword = event.currentTarget.value.trim()
        setConfirmPassword(confirmPassword)
    }

    useEffect(() => {
        if (!password) {
            setError(EMPTY_PASSWORD_ERROR)
            props.setPassword(undefined)
            return
        }
        if (password.length < 5) {
            setError(PASSWORD_LENGTH_ERROR)
            props.setPassword(undefined)
            return
        }
        if (password !== confirmPassword) {
            setError(PASSWORD_NOT_SAME_ERROR)
            props.setPassword(undefined)
            return
        }

        setError(undefined)
        props.setPassword(password)
    }, [password, confirmPassword])

    return (
        <Box align="center" justify="center" pad="small">
            <FormField
                htmlFor="password"
                error={error}
            >
                <Box align="center" justify="center" pad="small">
                    <TextInput id="password" data-testid="password" type="password" onChange={onChangePassword}
                               icon={<Lock/>}/>
                </Box>
                <Box align="center" justify="center" pad="small">
                    <TextInput id="confirm_password" data-testid="confirm_password" type="password"
                               onChange={onChangeConfirmPassword} icon={<Lock/>}/>
                </Box>
            </FormField>
        </Box>
    )
}

export default PasswordInput