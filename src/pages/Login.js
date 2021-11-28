import React from 'react';
import { CenterContainer } from '../styles/Shared';
import LoginForm, { SubmitButton,LoginInput } from '../styles/LoginForm';

const Login = () => {
    return (
        <CenterContainer>
            <LoginForm action="">
                <LoginInput type="email" />
                <LoginInput type="password" />
                <SubmitButton type="submit">Sign In</SubmitButton>
            </LoginForm>
        </CenterContainer>
    );
};

export default Login;