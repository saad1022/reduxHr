import { EMAIL_CHANGED,PASSWORD_CHANGED,QUOTE_OF_THE_DAY } from "../actions/types";

const INITIAL_STATE = { email: "" , password: "", name: "", phone: "", shift: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case EMAIL_CHANGED:
            return { ...state, email: action.payload};

        case PASSWORD_CHANGED:
             return { ...state, password: action.payload};    

        case QUOTE_OF_THE_DAY:
             return { ...state, name: action.payload.name, phone: action.payload.phone, shift: action.payload.shift};
             
        default:
            return state;     
    }
};