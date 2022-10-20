import axios from 'axios';

export const SET_IS_FETCHING_ANIMAL = 'SET_IS_FETCHING_ANIMAL';
export const GET_ANIMAL_SUCCESS = 'GET_ANIMAL_SUCCESS';
export const GET_ANIMAL_FAILURE = 'GET_ANIMAL_FAILURE';

export const getAnimal = () => dispatch => {
    dispatch(setFetchAnimal(true));
    axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        .then(res => dispatch(getAnimalSuccess(res.data)))
        .catch(err => dispatch(getAnimalFailure(err.message)));
}

export const setFetchAnimal = (isFetching) => {
    return({type: SET_IS_FETCHING_ANIMAL, payload: isFetching});
}

export const getAnimalSuccess = (animal) => {
    return({type: GET_ANIMAL_SUCCESS, payload: animal});
}

export const getAnimalFailure = (error) => {
    return({type: GET_ANIMAL_FAILURE, payload: error});
}
