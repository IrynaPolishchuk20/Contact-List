import {
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    SET_SEARCH_QUERY,
    SET_FILTER,
    TOGGLE_FAVORITE,
    ADD_STATUS,
    DELETE_STATUS,
    EDIT_STATUS
} from './type'

export const addContact = (newContact) => {
    return{
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id) => {
    return{
        type: DELETE_CONTACT,
        payload: id
    }
}

export const editContact = (id, updatedContact) => {
    return{
        type: EDIT_CONTACT,
        payload: {id, updatedContact}
    }
}

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query
})

export const setFilter = (status) => {
    return {
        type: SET_FILTER,
        payload: status
    }
}

export const toggleFavorite = (id) =>{
    return{
        type:TOGGLE_FAVORITE,
        payload: id
    }
}

export const addStatus = (newStatus) => ({
    type: ADD_STATUS,
    payload: newStatus
})

export const deleteStatus = (status) =>{
    return{
        type: DELETE_STATUS,
        payload: status
    }
}

export const editStatus = (oldStatus, updatedData) => {
    return {
        type: EDIT_STATUS,
        payload: { oldStatus, updatedData }
    }
}