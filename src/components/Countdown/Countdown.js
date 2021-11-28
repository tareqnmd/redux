import React from 'react';
import CountdownArea,{ButtonArea} from "../../styles/Countdown";
import CountdownValue from '../CountdownValue/CountdownValue';
import Decrement from '../Decrement/Decrement';
import Increment from '../Increment/Increment';

const Countdown = () => {
    return (
        <>
            <CountdownArea>
                <CountdownValue/>
                <ButtonArea>
                    <Decrement />
                    <Increment />
                </ButtonArea>
            </CountdownArea>
        </>
    );
};

export default Countdown;