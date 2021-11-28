import React from 'react';
import { IncrementButton } from '../../styles/Countdown';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/actions';

const Increment = ({increment}) => {
    return (
        <IncrementButton onClick={()=>increment()}>
            Increment by 1
        </IncrementButton>
    );
};

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = {
    increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment);