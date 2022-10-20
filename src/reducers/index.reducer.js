import {GET_ANIMAL, SET_IS_FETCHING_ANIMAL, GET_ANIMAL_SUCCESS, GET_ANIMAL_FAILURE} from '../actions/index.actions';

const initialState = {
    animal: {
        name: "Fairy Bluebird",
        latin_name: "Irena puella",
        animal_type: "Bird",
        active_time: "Diurnal",
        length_min: "0.75",
        length_max: "0.9",
        weight_min: "0.03",
        weight_max: "0.18",
        lifespan: "12",
        habitat: "Forest",
        diet: "Fruit, nectar, and insects",
        geo_range: "South and Southeast Asia",
        image_link: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fairy_bluebird_male_-_Irena_puella.jpg",
        id: 69
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

// https://zoo-animal-api.herokuapp.com/animals/rand