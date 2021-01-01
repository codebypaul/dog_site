import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
    render() {
        return (
            <FooterCont >©2021 product of Paul Williams </FooterCont>
        )
    }
}

const FooterCont = styled.footer`
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    position: fixed;
    bottom:0;
`