import { Card, ListGroup } from 'react-bootstrap'
import { PillBtn } from './Button'
// import styled from 'styled-components'

export default function PupCard(props) {
    return(
        <Card className="pupcard text-center mx-1">
            <Card.Img src="https://www.dogtime.com/assets/uploads/2019/06/australian-shepherd-puppy-5-1280x720.jpg"/>
            <Card.Body >
                <Card.Title>Puppy Name - Gender</Card.Title>
                <Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Price</ListGroup.Item>
                        <ListGroup.Item>Breed</ListGroup.Item>
                        <ListGroup.Item>AKC Registered</ListGroup.Item>
                        <ListGroup.Item>Status</ListGroup.Item>
                        <ListGroup.Item>Health Certificate</ListGroup.Item>
                        <ListGroup.Item>Registration Papers</ListGroup.Item>
                        <ListGroup.Item>Dewormed</ListGroup.Item>
                    </ListGroup>
                </Card.Text>
                <PillBtn>Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </PillBtn>
            </Card.Body>
        </Card>
    )
}
