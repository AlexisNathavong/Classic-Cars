export const initialState = {
    signup: [
        {
            first_name: '',
            last_name: '', 
            username: '',
            password: '',
            confirm_password: ''
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIGNUP':
            return {
                ...state,
                signup: action.payload
            }
        default:
            return state;
    }
}