import React from 'react'
import Carouselcardslist from "./Carouselcard"
import Carousel from "react-elastic-carousel"
import "../App.css"

 
const Slider = () => {    
    return (
        <>
            <Carousel>
                {Carouselcardslist.map((item)=>{
                    return item
                })}
            </Carousel>
        </>
    )
}
export default Slider
