import React from 'react'
import {connect} from "react-redux"

const Bloglist102 = (props) => { 
    console.log(props)
    const blogpost102title=props.blogs[1].title
    const blogpost102content=props.blogs[1].content
    return (
        <>
          <div style={{marginLeft:"10px", paddingTop:"100px"}}>

             <p> title : {blogpost102title}  </p>

             <p> content : {blogpost102content}  </p>

          </div> 
        </>
    )
}
const mapStateToProps= state=>{
    return {
        blogs:state.blogs
    }
}
export default connect(mapStateToProps)(Bloglist102)
