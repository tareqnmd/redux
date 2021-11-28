import styled from 'styled-components';

const LoginForm = styled.form`
    max-width: 260px;
    width: 100%;
    background-color: #99f2c8;
    padding: 20px;
    margin: 0 auto;
`;

const LoginInput = styled.input`
    display: block;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
`;

const SubmitButton = styled.button`
    border: none;
    background-color:green;
    color: #ffffff;
    padding:10px 30px;
    border-radius:4px;
    cursor: pointer;
    width: 100%;
`;

export default LoginForm;
export { SubmitButton, LoginInput };