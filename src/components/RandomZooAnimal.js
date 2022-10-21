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
        <div className='flex-wrapper'>
            <header>
                <h1>Bring the Zoo to You!</h1>
                <button onClick={getAnimal}>Get New Animal</button>
            </header>
            <section id='card-container'>
                <div className='flex-wrapper'>
                    <h2>{animal.name}</h2>
                    <h3>(<i>{animal.latin_name}</i>)</h3>
                </div>
                <img src={animal.image_link} alt={animal.name} />
                <h3>Details</h3>
                <hr />
                <div className='wrapper'>
                    <div className='half'>
                        <p><b>Class: </b>{animal.animal_type}</p>
                        <p><b>Active: </b>{animal.active_time}</p>
                        <p><b>Length: </b>{animal.length_min} ft. - {animal.length_max} ft.</p>
                        <p><b>Weight: </b>{animal.weight_min} lbs. - {animal.weight_max} lbs.</p>
                    </div>
                    <div className='half'>
                        <p><b>Lifespan: </b>{animal.lifespan} years</p>
                        <p><b>Diet: </b>{animal.diet}</p>
                        <p><b>Location: </b>{animal.geo_range}</p>
                        <p><b>Habitat: </b>{animal.habitat}</p>
                    </div>
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