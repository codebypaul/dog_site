import { Navbar, Nav } from 'react-bootstrap'
import { PillBtn } from '../components/Button'

export default function Navigation() {
    return (
        <Navbar sticky='top' bg="light" expand="lg">
        <Nav className='ml-auto d-flex flex-row align-items-center'>
            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link" href="/available">Available Pups</Nav.Link>
            <Nav.Link className="nav-link" href="/payment">Payment and Shipping</Nav.Link>
            <Nav.Link className="nav-link" href="/reviews">Reviews</Nav.Link>
            <Nav.Link className="nav-link" href="/contact">
            <PillBtn>Contact</PillBtn>
            </Nav.Link>
        </Nav>
        </Navbar>
    )
}