import React, {useState} from 'react'
import {Box, FormField, TextInput} from 'grommet'
import {Mail} from 'grommet-icons'

const EMPTY_EMAIL_ERROR = "Email cannot be empty."

function EmailInput() {
    const [error, setError] = useState<String | undefined>(undefined)

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value.trim() === "") {
            setError(EMPTY_EMAIL_ERROR)
            return
        }

        setError(undefined)
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