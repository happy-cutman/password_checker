const initialState = {
    originPassword: '',
    originTypingTime: 0,
    successSubmit: false,
    successAuth: false,
};

// Reducer
const formReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_ORIGIN_PASSWORD':
            return {...state, originPassword: action.payload};
        case 'SET_ORIGIN_TIME':
            return {...state, originTypingTime: action.payload};
        case 'SET_SUCCESS_SUBMIT':
            return {...state, successSubmit: action.payload};
        case 'SET_SUCCESS_AUTH':
            return {...state, successAuth: action.payload};
        default:
            return state
    }
};


// Action creators
export const setOriginPassword = (value) => ({
    type: 'SET_ORIGIN_PASSWORD',
    payload: value
});

export const setOriginTime = (value) => ({
    type: 'SET_ORIGIN_TIME',
    payload: value
});

export const setSuccessSubmit = (value) => ({
    type: 'SET_SUCCESS_SUBMIT',
    payload: value
});

export const setSuccessAuth = (value) => ({
    type: 'SET_SUCCESS_AUTH',
    payload: value
});


export default formReducer;