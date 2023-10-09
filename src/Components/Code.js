import React from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

const Container = styled(Box)`
display:flex;
background-color:#060606;
height:56vh;
`
const Code = () => {

  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext)

  return (

    <Container>

      <Editor heading='HTML' icon={<HtmlOutlinedIcon />} color='#FF3C41' value={html} onChange={setHtml} />
      <Editor heading='CSS' icon={<CssIcon />} color='#0EBEFF' value={css} onChange={setCss} />
      <Editor heading='JS' icon={<JavascriptIcon />} color='#FCD000' value={js} onChange={setJs} />

    </Container>

  )
}

export default Code