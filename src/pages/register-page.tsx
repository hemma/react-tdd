import React from 'react'
import {Box, Button, CheckBox, DateInput, Form, Grid, TextInput} from 'grommet'
import {Lock, Mail} from 'grommet-icons'
import EmailInput from "../components/email-input";
import PasswordInput from "../components/password-input";


function Register() {

    return (
        <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column" pad={{"top": "xlarge"}}>
            <Grid pad="small">
                <Box align="center" justify="center" pad="small">
                    <h3>Register</h3>
                </Box>
                <Form>
                    <EmailInput setEmail={() => {}}/>

                    <PasswordInput setPassword={() => {}}/>
                    <Box align="center" justify="center" pad="small">
                        <DateInput format="yyyy/mm/dd" inline={false}/>
                    </Box>
                    <Box align="end" justify="center" pad="small">
                        <CheckBox label="Accept terms & conditions"/>
                    </Box>
                    <Box align="center" justify="center" pad="small">
                        <Button label="Button" primary secondary={false} reverse={false} type="submit"/>
                    </Box>
                </Form>
            </Grid>
        </Box>
    )
}

export default Register