import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../../reducers/SignInReducer';
import axios from 'axios';

const SignIn = () => {

    const [user, setNewUser] = useState({username: '', password: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});
    };

    const signin = e => {
        e.preventDefault();

        axios.post('', user)

            .then(res => {
                console.log('SignIn check', res)

                localStorage.setItem('token', res.data.payload);

                dispatch({ type: 'SIGNIN', payload: res.data});
            })

            .catch(err => {
                console.log('Error in SignIn', err.response)
            })
        setNewUser('');
    };

    console.log(state);

    return (
        <form>
            <div className='sign-in-form'>
                <label>Username:</label>
                <input
                    className='sign-in-form'
                    type='text'
                    name='username'
                    placeholder='username'
                    value={user.username} required
                    onChange={handleChanges}
                />
            </div>

            <div className='sign-in-form'>
                <label>Password:</label>
                <input
                    className='sign-in-form'
                    type='password'
                    name='password'
                    placeholder='enter password'
                    value={user.password} required
                    onChange={handleChanges}
                />
            </div>

            <button onClick={signin}>Submit</button>
        </form>
    )
}


export default SignIn;