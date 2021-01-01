import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.loveyourdog.com/wp-content/uploads/2020/03/Best-Dog-Food-For-Great-Danes-900x500.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Great Danes</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555379306/shape/mentalfloss/istock_000040509734_small.jpg?itok=0FofmCRJ"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Australian Shepherds</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2009/10/06131458/labrador-retriever.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Labrador Retrievers</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
