import React from 'react'
import { Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import { useState, useEffect } from 'react'


const Container = styled(Box)`
height: 44vh
`

const Result = () => {

    const [src, setSrc] = useState('')

    const { html, css, js } = useContext(DataContext)
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [html, css, js,srcCode])

    return (

        <Container>

            <iframe
                srcDoc={src}
                title='Result'
                sandbox='allow-scripts'
                width='100%'
                height='100%'
                frameBorder={0}
            />

        </Container>

    )
}

export default Result