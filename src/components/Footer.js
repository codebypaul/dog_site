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
    width: ;
    background: black;
    color: white;
    text-align: center;
    bottom:0;
`