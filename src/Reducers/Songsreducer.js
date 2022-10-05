
const SongState =[]

const songReducer = (state = SongState, action) => {
    switch (action.type) {  
        case "SET_SONGS":
            return action.songs

        default:
            return state
    }

}

export default songReducer
