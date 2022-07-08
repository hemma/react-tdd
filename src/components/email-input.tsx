import React from 'react'
import {Box, TextInput} from 'grommet'
import {Mail} from 'grommet-icons'


function EmailInput() {

    return (
        <Box align="center" justify="center" pad="small">
            <TextInput placeholder="email@provider.se" plain={false} size="medium" reverse={false}
                       type="text" icon={<Mail/>}/>
        </Box>
    )
}

export default EmailInput