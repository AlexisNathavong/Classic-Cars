import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../../reducers/SignUpReducer';
import axios from 'axios';

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
        <form>

            <div className='sign-up-form'>
                <label>First Name:</label>
                <input
                    className='sign-up-form'
                    type='text'
                    name='first_name'
                    placeholder='first name'
                    value={user.first_name} required
                    onChange={handleChanges}
                />
            </div>

            <div className='sign-up-form'>
                <label>Last Name:</label>
                <input
                    className='sign-up-form'
                    type='text'
                    name='last_name'
                    placeholder='last name'
                    value={user.last_name} required
                    onChange={handleChanges}
                />
            </div>

            <div className='sign-up-form'>
                <label>Email:</label>
                <input
                    className='sign-up-form'
                    type='text'
                    name='email'
                    placeholder='email'
                    value={user.email} required
                    onChange={handleChanges}
                />
            </div>

            <div className='sign-up-form'>
                <label>Password:</label>
                <input
                    className='sign-up-form'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={user.password} required
                    onChange={handleChanges}
                />
            </div>

            <div className='sign-up-form'>
                <label>Re-Enter Password</label>
                <input
                    className='sign-up-form'
                    type='password'
                    name='confirm_password'
                    placeholder='re-enter password'
                    value={user.confirm_password} required
                    onChange={handleChanges}
                />
            </div>
                <button onClick={signup}>Submit</button>
        </form>
    )

}

export default SignUp;