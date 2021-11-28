import React from 'react';
import { CountdownResult } from '../../styles/Countdown';
import { connect } from 'react-redux';

const CountdownValue = ({value}) => {
    return (
        <CountdownResult>
            {value}
        </CountdownResult>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

export default connect(mapStateToProps)(CountdownValue);