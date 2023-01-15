import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {
    return(
        <Carousel fade>
            {
                start.map((item)=>(
                    <Carousel.Item key={item.image} id="banner" interval={2000} keyboard={true}>
                        <img
                            className = "d-block w-100"
                            src = {item}
                            alt="First Slide"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
    
}

export default Slider