import React, {useState} from 'react'
import {Box, FormField, TextInput} from 'grommet'
import {Mail} from 'grommet-icons'

const EMPTY_EMAIL_ERROR = "Email cannot be empty."
const INVALID_EMAIL_ERROR = "Email need to include @."

interface EmailInputProps {
    setEmail(email: string | undefined): void;
}

function EmailInput(props: EmailInputProps) {
    const [error, setError] = useState<string | undefined>(undefined)

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const email = event.currentTarget.value.trim()
        if (email === "") {
            setError(EMPTY_EMAIL_ERROR)
            props.setEmail(undefined)
            return
        }
        if (!email.includes("@")) {
            setError(INVALID_EMAIL_ERROR)
            props.setEmail(undefined)
            return;
        }

        setError(undefined)
        props.setEmail(email)
    }

    return (
        <Box align="center" justify="center" pad="small">
            <FormField
                htmlFor="email"
                error={error}
            >
                <TextInput id="email" data-testid="email" placeholder="email@provider.se" plain={false} size="medium"
                           reverse={false}
                           onChange={onChange}
                           type="text" icon={<Mail/>}/>
            </FormField>
        </Box>
    )
}

export default EmailInput