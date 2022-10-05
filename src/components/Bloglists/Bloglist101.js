import React from 'react'
import {connect} from "react-redux"

const Bloglist101 = (props) => { 
    console.log(props)
    const blogpost101title=props.blogs[0].title
    const blogpost101content=props.blogs[0].content
    return (
        <>
         <div style={{marginLeft:"10px", paddingTop:"100px"}}>
             <p> title : {blogpost101title}  </p>

             <p> content : {blogpost101content}  </p>

          </div> 
           
        </>
    )
}
const mapStateToProps= state=>{
    return {
        blogs:state.blogs
    }
}
export default connect(mapStateToProps)(Bloglist101)


