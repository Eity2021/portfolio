import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function CarouselSlider({allImages}) {

    // console.log( 'allImages', allImages)
  return (

<Carousel data-bs-theme="dark">
      {allImages?.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>

  )
}
