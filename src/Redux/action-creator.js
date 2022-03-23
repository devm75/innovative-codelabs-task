import { UPDATE_NAME,UPDATE_AGE,UPDATE_GENDER,UPDATE_OCCUPATION } from "./actions"

export const updateName = (data) => {
    return {
        type: UPDATE_NAME,
        payload:data
    }
}
export const updateAge = (data) => {
    return {
        type: UPDATE_AGE,
        payload: data
    }
}
export const updateGender = (data) => {
    return {
        type: UPDATE_GENDER,
        payload: data
    }
}
export const updateOccupation = (data) => {
    return {
        type: UPDATE_OCCUPATION,
        payload: data
    }
}


