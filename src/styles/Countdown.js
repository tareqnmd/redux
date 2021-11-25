import styled from 'styled-components';

const CountdownArea = styled.div`
    max-width: 400px;
    box-shadow: 0 0 12px #dfdfdf;
    padding: 20px;
    margin: 0 auto;
    h3{
        text-align: center;
    }
`;

const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const IncrementButton = styled.button`
    border: none;
    background-color:green;
    color: #ffffff;
    padding:4px 10px;
    border-radius:4px;
`;

const DecrementButton = styled.button`
    border: none;
    background-color:red;
    color: #ffffff;
    padding:4px 10px;
    border-radius:4px;
`;

export default CountdownArea;
export { ButtonArea,IncrementButton,DecrementButton };