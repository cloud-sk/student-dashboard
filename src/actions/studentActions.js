import * as actions from '../actionTypes';


const api = async (path, options) => {
    const response = await fetch(path, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    })
    return response.json()
}

const getFn = async (path) => await api(path, { method: "GET" })
const postFn = async (path, data = {}) => await api(path, { method: "POST", body: JSON.stringify(data) })

export const getAllStudentDetails = () => async (dispatch, getState) => {
    dispatch({ type: actions.GET_ALL_STUDENT_REQUEST })
    const data = await getFn('https://api.myjson.com/bins/1dlper');
    dispatch({
        type: actions.GET_ALL_STUDENT_SUCCESS,
        ...data,
        studentResults: data
    })
}

export const submitSearch = (input) => async (dispatch, getState) => {
    dispatch({ type: actions.SEARCH_REQUEST, input })
}

export const toggleData = (param) =>  async (dispatch, getState) => {
    dispatch({ type: actions.TOGGLE_NAME, param })
}


