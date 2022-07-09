import React, {useEffect, useState} from 'react'
import {Box, Button, Form, Grid} from 'grommet'

import EmailInput from "../components/email-input";
import PasswordInput from "../components/password-input";


function Register() {

    const [isDisabled, setIsDisabled] = useState(false)

    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (!email) {
            setIsDisabled(true)
            return
        }
        if (!password) {
            setIsDisabled(true)
            return
        }

        setIsDisabled(false)
    }, [email, password])

    return (
        <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column" pad={{"top": "xlarge"}}>
            <Grid pad="small">
                <Box align="center" justify="center" pad="small">
                    <h3>Register</h3>
                </Box>
                <Form>
                    <EmailInput setEmail={setEmail}/>

                    <PasswordInput setPassword={setPassword}/>

                    <Box align="center" justify="center" pad="small">
                        <Button id="submit" data-testid="submit" label="Button" primary disabled={isDisabled} secondary={false} reverse={false} type="submit"/>
                    </Box>
                </Form>
            </Grid>
        </Box>
    )
}

export default Register