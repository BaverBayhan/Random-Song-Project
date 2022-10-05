
const Backgroundstate= []

const backgroundReducer = (state = Backgroundstate, action) => {
    switch (action.type) {  
        case "SET_BACKGROUNDS":
            return action.backgrounds

        default:
            return state
    }

}

export default backgroundReducer
