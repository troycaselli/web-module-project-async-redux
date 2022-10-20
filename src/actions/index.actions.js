export const GET_ANIMAL = 'GET_ANIMAL';
export const SET_IS_FETCHING_ANIMAL = 'SET_IS_FETCHING_ANIMAL';
export const GET_ANIMAL_SUCCESS = 'GET_ANIMAL_SUCCESS';
export const GET_ANIMAL_FAILURE = 'GET_ANIMAL_FAILURE';

export const getAnimal = () => dispatch => {
    return({type: GET_ANIMAL});
}

export const setFetchAnmial = (isFetching) => {
    return({type: SET_IS_FETCHING_ANIMAL, payload: isFetching});
}

export const getAnimalSuccess = (animal) => {
    return({type: GET_ANIMAL_SUCCESS, payload: animal});
}

export const getAnimalFailure = (error) => {
    return({type: GET_ANIMAL_FAILURE, payload: error});
}