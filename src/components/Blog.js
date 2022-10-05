import React from 'react'
import "../App.css"
import Slider from "./Slider.js"
import { Link } from "react-router-dom"

 
const Blog = () => {

return (
            <div className="wrapperblog"> 
                <div className="containerDiv">
                    <Slider/>
                </div>
                <div className="flexdiv">
                    <div style={{padding:"10px"}} className="card articles firstarticle">
                        <Link to="/Blog/8ea43787-8414-4e0d-b89f-736f08200c03">
                           BLOGPOST1
                        </Link>
                    </div>
                    <div className="card articles"><Link to="/Blog/78347a07-2ab3-4870-bf0a-0e8e4b9d5434">BLOGPOST2</Link></div>
                    <div className="card articles"><Link to="#">blogpost3</Link></div>
                    <div className="card articles"><Link to="#">blogpost4</Link></div>
                    <div className="card articles"><Link to="#">blogpost5</Link></div>
                    <div className="card articles"><Link to="#">blogpost6</Link></div>
                    <div className="card articles"><Link to="#">blogpost7</Link></div>
                    <div className="card articles"><Link to="#">blogpost8</Link></div>
                    <div className="card articles"><Link to="#" >blogpost9</Link></div>
                </div>
            </div>
        )

}

export default Blog
