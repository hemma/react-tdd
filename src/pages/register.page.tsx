import React from 'react'
import {Box, Button, CheckBox, DateInput, Form, Grid, TextInput} from 'grommet'
import {Lock, Mail} from 'grommet-icons'


function Register() {

    return (
        <Box fill="vertical" overflow="auto" align="center" flex="grow" direction="column" pad={{"top": "xlarge"}}>
            <Grid pad="small">
                <Form>
                    <Box align="center" justify="center" pad="small">
                        <TextInput placeholder="email@provider.se" plain={false} size="medium" reverse={false}
                                   type="text" icon={<Mail/>}/>
                    </Box>
                    <Box align="center" justify="center" pad="small">
                        <TextInput type="password" icon={<Lock/>}/>
                    </Box>
                    <Box align="center" justify="center" pad="small">
                        <TextInput type="password" icon={<Lock/>}/>
                    </Box>
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