import React from 'react';
import { IncrementButton } from '../../styles/Countdown';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/actions';

const Increment = () => {
    return (
        <IncrementButton onClick={()=>{increment(1)}}>
            Increment by 1
        </IncrementButton>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    increment:increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment);