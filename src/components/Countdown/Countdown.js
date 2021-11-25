import React from 'react';
import CountdownArea,{ButtonArea} from "../../styles/Countdown";
import Decrement from '../Decrement/Decrement';
import Increment from '../Increment/Increment';


const Countdown = () => {
    return (
        <>
            <CountdownArea>
                <h3 className="count-results">0</h3>
                <ButtonArea>
                    <Decrement />
                    <Increment />
                </ButtonArea>
            </CountdownArea>
        </>
    );
};

export default Countdown;