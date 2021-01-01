import PupCard from '../components/PupCard'
// import { useState } from 'react'
import styled from 'styled-components'

export default function Home(props) {
    const AvailablePage = styled.div`
    background: transparent;
    height: 50vh;
    display: flex;
    align-items: flex-end;
    color: white; b                   

    `
    console.log(props.dog.background);
    return (
        <div>
            <AvailablePage>
                <BgImg className="pup-img" src={props.dog.background}/>
                <h1 className="m-5">Browse Through Our Available {props.dog.breed} Pups</h1>
            </AvailablePage>
            <PupContainer>
                <PupCard/>
            </PupContainer>

        </div>
    )
}

const BgImg = styled.img`
z-index: -1;
position: fixed;
top:3rem;
`
const PupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: around;
    padding: 3rem;
    background: white;
    z-index: 1;
`

