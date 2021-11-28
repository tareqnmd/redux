import React from 'react';
import { DecrementButton } from '../../styles/Countdown';
import { connect } from 'react-redux';
import { decrement } from '../../redux/actions/actions';

const Decrement = () => {
    return (
        <DecrementButton onClick={()=>decrement()}>
            Decrement by 1
        </DecrementButton>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = {
    decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Decrement);