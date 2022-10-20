import React from 'react';
import {connect} from 'react-redux';
import {getAnimal} from '../actions/index.actions';

import './RandomZooAnimal.css';

const RandomZooAnimal = (props) => {
    const {animal, isFetching, error, getAnimal} = props

    if(isFetching) {
        return (
            <header id='fetching'>
                <h1>Bring the Zoo to You!</h1>
                <h2>Your Animal is Being Shipped...</h2>
            </header>
        )
    }

    if(error) {
        return (
            <header id='error'>
                <h1>Bring the Zoo to You!</h1>
                <h2>Oh, No! Your Animal Escaped!</h2>
                <h3>Error: {error}</h3>
            </header>
        )
    }

    return(
        <div>
            <header>
                <h1>Bring the Zoo to You!</h1>
                <button onClick={getAnimal}>Get New Animal</button>
            </header>
            <section>
                <div>
                    <h2>{animal.name}</h2>
                    <h3>(<i>{animal.latin_name}</i>)</h3>
                </div>
                <img src={animal.image_link} alt={animal.name} />
                <div>
                    <h3>Details:</h3>
                    <p>Class: {animal.animal_type}</p>
                    <p>Active: {animal.active_time}</p>
                    <p>Length: {animal.length_min} ft. - {animal.length_max} ft.</p>
                    <p>Weight: {animal.weight_min} lbs. - {animal.weight_max} lbs.</p>
                    <p>Lifespan: {animal.lifespan} years</p>
                    <p>Diet: {animal.diet}</p>
                    <p>Location: {animal.geo_range}</p>
                    <p>Habitat: {animal.habitat}</p>
                </div>
            </section>
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

export default connect(mapStateToProps, {getAnimal})(RandomZooAnimal);