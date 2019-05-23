export * from "./EmployeeAction";
export * from "./AuthAction";

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, QUOTE_OF_THE_DAY } from "./types";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ( email , password ) => {
    return dispatch => {
        //console.log("Email within firebase " + email);
        
        firebase
            .auth()
            .signInWithEmailAndPassword(email , password)
            .then(user => loginUserSuccess(dispatch , user))
            .catch(() => {
                //Sign up user
                firebase 
                     .auth()
                     .createUserWithEmailAndPassword(email , password)
                     .then(user => loginUserSuccess(dispatch , user));
            });

        const loginUserSuccess = ( dispatch, user) => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: user
            });
            //Actions.employeeCreate(user);
            ////Actions.employeeList();
            Actions.main();
        };
    };
};

export const quoteoftheday = ({name,phone,shift}) => {
    return {
        type: QUOTE_OF_THE_DAY,
        payload: {name,phone,shift}
    };
};