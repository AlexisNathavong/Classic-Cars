export const initialState = {
    signin: [
        {
            username: '',
            password: ''
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNIN':
            return {
                ...state,
                signin: action.payload
            }
        default:
            return state;
    }
}