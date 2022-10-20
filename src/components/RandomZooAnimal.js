import React from 'react';
import {connect} from 'react-redux';

const RandomZooAnimal = (props) => {
    const {animal, isFetching, error} = props

    if(isFetching) return <h3>Your Animal is Being Shipped...</h3>

    if(error) {
        return (
            <div>
                <h3>Oh, No! Your Animal Escaped!</h3>
                <h5>Error: {error}</h5>
            </div>
        )
    }

    return(
        <div>
            <button>Get New Animal</button>
            <div>
                <h2>{animal.name}</h2>
                <h4>(<i>{animal.latin_name}</i>)</h4>
            </div>
            <img src={animal.image_link} alt={animal.name} />
            <div>
                <h6>Details:</h6>
                <p>Class: {animal.animal_type}</p>
                <p>Active: {animal.active_time}</p>
                <p>Length: {animal.length_min} ft. - {animal.length_max} ft.</p>
                <p>Weight: {animal.weight_min} lbs. - {animal.weight_max} lbs.</p>
                <p>Lifespan: {animal.lifespan} years</p>
                <p>Diet: {animal.diet}</p>
                <p>Location: {animal.geo_range}</p>
                <p>Habitat: {animal.habitat}</p>
            </div>
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