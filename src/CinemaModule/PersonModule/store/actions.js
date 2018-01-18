import * as actionTypes from './actionTypes';
import api from '../../../axios';
import {addMovie, updateMovie} from "../../MovieModule/store/actions";

export const setPersonList = (movies) => {
    return {
        type: actionTypes.SET_PERSON_LIST,
        payload: movies
    }
};

export const addPerson = (movie) => {
    return {
        type: actionTypes.ADD_PERSON,
        payload: movie
    }
};

export const updatePerson = (movie) => {
    return {
        type: actionTypes.UPDATE_PERSON,
        payload: movie
    }
};

export const deletePerson = (movie) => {
    return {
        type: actionTypes.DELETE_PERSON,
        payload: movie
    }
};

export const selectPerson = (movie) => {
    return {
        type: actionTypes.SELECT_PERSON,
        payload: movie
    }
};

export const initPersonListRequest = () => {
    return dispatch => {
        api.get('/people/')
            .then(response => {
                dispatch(setPersonList(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const getPersonByIdRequest = (id) => {
    return dispatch => {
        api.get('/people/' + id)
            .then(response => {
                dispatch(selectPerson(response.data));
            })
            .catch(error => {
                console.log(error);
            })
    };
};

export const saveMovieRequest = (person) => {
    return dispatch => {
        (person.id ? api.put('/people/' + person.id, person) : api.post('/people/', person))
            .then((response) => {
                dispatch(
                    person.id ? updateMovie(response.data) : addMovie(response.data)
                );
            })
            .catch(error => {
                console.log(error);
            })
        ;
    };
};