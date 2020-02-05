import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Your full name is required'),
    email: Yup.string()
        .email('Insert a valid e-mail address')
        .required('An email address is required'),
    password: Yup.string()
        .min(6, 'Password must contain at least 6 characters')
        .required('An password is required'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Your full name" />
                <Input name="email" type="email" placeholder="Your email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Your password"
                />

                <button type="submit">Create account</button>
                <Link to="/">I already have an account</Link>
            </Form>
        </>
    );
}
