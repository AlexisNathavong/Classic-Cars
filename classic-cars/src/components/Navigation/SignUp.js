import React from 'react';

const SignUp = () => {

    const [user, setNewUser] = useState({first_name: '', last_name: '', email: '', username: '', password: '', confirm_password: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const signup = e => {
        e.preventDefault();

        axios.post('', user)

            .then(res => {
                console.log('SignUp check', res)

                localStorage.setItem('token', res.data.payload);

                dispatch({ type: 'SIGNUP', payload: res.data});
            })

            .catch(err => {
                console.log('Error in SignUp', err.response)
            })
        setNewUser('');
    };

    console.log(state);

    return (
        <div className='sign-up'>
            
        </div>
    )

}

export default SignUp;