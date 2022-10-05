import database from "../firebase/Firebaseconfig"

export const setBlogs = (blogs) => ({
    type: "SET_BLOGS",
    blogs
})

export const setSongs = (songs)=>({
    type: "SET_SONGS",
    songs
})

export const setBackgrounds = (backgrounds)=>({
    type: "SET_BACKGROUNDS",
    backgrounds
})

 const getDatasFromDatabase=()=>{
    return (dispatch)=>{
        return database.ref().once("value").then((snapshot)=>{
            const blogs=Object.values(snapshot.val().Blogposts)
            const songs=Object.values(snapshot.val().Songs)
            const backgrounds=Object.values(snapshot.val().Backgroundimages)

            dispatch(setBlogs(blogs))
            dispatch(setSongs(songs))
            dispatch(setBackgrounds(backgrounds))
        })
    }
}

export default getDatasFromDatabase