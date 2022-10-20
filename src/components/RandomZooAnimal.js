import React from 'react';
import {connect} from 'react-redux';

const RandomZooAnimal = (props) => {
    const {animal, isFetching, error} = props

    return(
        <div>
            <p>{JSON.stringify(animal)}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        animal: state.animal,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {})(RandomZooAnimal);