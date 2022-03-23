import { UPDATE_NAME,UPDATE_AGE,UPDATE_GENDER,UPDATE_OCCUPATION } from "./actions";

const initialState = {
    name: localStorage.getItem('name') || "",
    age: localStorage.getItem('age')|| 25,
    gender: localStorage.getItem('gender')||"",
    occupation:localStorage.getItem('occupation')||"",
}
export const reducer = (state = initialState, action) => {
    if (action.type === UPDATE_NAME) {
        return {
            ...state,
            name:action.payload
        }
    }
    if (action.type === UPDATE_AGE) {
        return {
            ...state,
            age: action.payload
        }
    }
    if (action.type === UPDATE_GENDER) {
        return {
            ...state,
            gender: action.payload
        }
    }
    if (action.type === UPDATE_OCCUPATION) {
        return {
            ...state,
            occupation: action.payload
        }
    }
   
    return state
}