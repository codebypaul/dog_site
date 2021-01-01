import styled from 'styled-components'

const BreedBtn = styled.button`
    border: .05rem solid black;
    background: transparent;
    padding: .5rem;
    border-radius: 1rem;
    &:hover{
        background: black;
        color: white;
    }
`

const PillBtn = styled.button`
    border-radius:2rem;
    background: orange;
    border: none;
    padding: .5rem 1rem;
`
export { BreedBtn,PillBtn }