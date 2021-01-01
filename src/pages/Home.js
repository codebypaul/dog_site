import Carousel from '../components/Carousel'
import {BreedBtn} from '../components/Button'
import { Link } from 'react-router-dom'
export default function Home(props) {
    return (
        <div className="mb-5">
            <Carousel/>
            <div className="row d-flex justify-content-around mt-5">
                <Link to='available'>
                    <BreedBtn onClick={props.setDane}>Great Danes</BreedBtn>
                </Link>
                <Link to='available'>
                    <BreedBtn onClick={props.setAussie}>Australian Shepards</BreedBtn>
                </Link>
                <Link to='available'>
                    <BreedBtn onClick={props.setLab}>Labrador Retrievers</BreedBtn>
                </Link>
            </div>
        </div>
    )
}