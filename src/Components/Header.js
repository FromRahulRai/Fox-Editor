import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import logo from '../images/logo.png'

const Container = styled(AppBar)`
    background: #060606;
    height:9vh
    `
const Header = () => {
    const text = "< Fox Coder />"
    return (

        <Container position='static'>

            <Toolbar>
            <img src={logo} alt='logo' style={{ width: 60 }} /> 
            </Toolbar>

        </Container>

    )
}
export default Header