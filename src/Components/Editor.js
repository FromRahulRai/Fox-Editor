import React from 'react'
import { Box, styled } from '@mui/material'
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import '../App.css'

const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px;

`

const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding:9px 12px;
`;

const Header = styled(Box)`
display:flex;
background:#060606;
color:#AAABC1;
justify-content:space-between;
font-weight:700;
`
const Editor = ({ heading, icon, color, value, onChange }) => {

  const [open, setOpen] = useState(true)


  const handleChange = (editor, data, value) => {

    onChange(value)

  }

  return (

    <Container style={open ? null : { flexGrow: 0 }}>

      <Header>
        <Heading>
          <Box component='span' style={{
            background: color,
            height: 15, width: 40,
            display: 'flex',
            placeContent: 'center',
            borderRadius: 5,
            marginRight: 5,
            paddingBottom: 1,
            alignItems: 'center',
            color: 'whiteSmoke',
            fontWeight: 700
          }}>
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenOutlinedIcon fontSize='small' cursor='pointer' onClick={() => setOpen(prevState => !prevState)} style={{ alignSelf: 'center' }} />
      </Header>
      <ControlledEditor className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
      />


    </Container>

  )
}

export default Editor