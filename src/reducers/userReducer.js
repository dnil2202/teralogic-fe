const INITIAL_STATE={
    id:null,
    username:'',
    email:'',
    role:'',
}


export const userReducer=(state= INITIAL_STATE, action)=>{
    console.log("data dari Action", action)
        switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state, ...action.payload}
        case "LOGOUT_SUCCESS":
                return INITIAL_STATE;
        default:
            return state;
    }
    
    }