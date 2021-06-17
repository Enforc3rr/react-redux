const loggedReducer = (state = false, action) =>{
    switch(action.type){
        case "login":
            return !state;
        case "logout":
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;