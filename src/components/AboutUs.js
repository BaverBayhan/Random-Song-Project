import React from 'react'
import "../App.css"

const AboutUs = () => {
    return (
        <>
            <div >
                <div className="forbackground">
                <div className="row" style={{width:"100%",paddingLeft:"5%"}}>
                    <div className="col-xl-5 col-lg-10 col-md-10 col-sm-9 content content1 px-4 mt-5 ml-5 mr-5">
                        <p style={{color:"white"}} className="contentparagraph">
                            <i style={{fontSize:"1.2em"}}> <b>" A platform to discover every kind of music you want "</b> </i>
                            <br/><br/>
                            <i style={{fontSize:"1.2em"}}>Introduction</i>
                            <br/><br/> 
                            Logosong is an application created for people to discover new pieces of music globally according to the language, genres and mood types they prefer.
                            <br/><br/>
                            <i style={{fontSize:"1.2em"}}>Mission</i>
                            <br/><br/>
                            Logosong has been set up to introduce people to the amazing music accumulation of the global world, and it aims to help people to discover a new type of music more easily and variously. All you need to do is to choose your mood and the other categories and then you can shuffle it! 
                            <br/><br/>
                            <i style={{fontSize:"1.2em"}}>What will you find here ?</i>
                            <br/><br/>
                            In addition to discovering a wide variety of songs on this platform, you can also look at the blog. In this blog, we will be sharing content about the history of music and genres and sometimes important actual news about the music industry, hope you will enjoy.       
                        </p>
                    </div>
                    <div className="col-xl-5 col-lg-10 col-md-10 col-sm-9 content content2 px-4 mt-5 ml-5">
                        <p style={{color:"white"}} className="contentparagraph">
                            <i style={{fontSize:"1.2em"}}>Logosong Means…</i>
                            <br/><br/>
                            This word is formed by combining the words "logos" and "song". We all know what song means. Logos, on the other hand, has many meanings such as word, law and reason. Heraclitus, one of the pre-Socratic Greek philosophers, determined it as the organizing principle of the universe and later found an important place in Aristotle, Stoa and Christian philosophy. In this sense, logos are the opposite of coincidence and randomness. So, 
                            <br/><br/> 
                            <i className="ml-5" style={{fontSize:"1.3em"}}>"Nothing you discover is random"</i> 
                            <br/><br/>
                            <i style={{fontSize:"1.2em"}}>Contact</i>
                            <br/><br/>    
                            If you have recommendations for Logosong you can directly contact us by e-mail or our social media accounts. Logosong will be able to stand, largely thanks to your support, so if you want to support us you can visit “support” and our Patreon link.
                            <button style={{float:"right",marginTop:"18%"}} className="btn btn-warning"><a className="maillink" href = "mailto: logosongcom@gmail.com">Send Email</a></button>
                        </p>
                    </div>
                </div>
                </div>
                
            </div>        
        </>
    )
}
export default AboutUs

