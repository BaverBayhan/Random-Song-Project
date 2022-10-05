
const Blogstate= []

const blogReducer = (state = Blogstate, action) => {
    switch (action.type) {  
        case "SET_BLOGS":
            return action.blogs

        default:
            return state
    }

}

export default blogReducer

