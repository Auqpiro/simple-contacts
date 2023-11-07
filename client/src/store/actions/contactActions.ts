import axios from "axios";
import * as routes from "../../api/routes";
import * as actions from "./index";
import {Thunk} from "../../type";

export const fetchContacts = (): Thunk => async (dispatch) => {
    const {data} = await axios.get(routes.contacts);
    dispatch({
        type: actions.CONTACTS_FETCH,
        payload: data,
    });
};

/*
export const addContacts = () => async (dispatch) => {
    return dispatch({
        type: actions.add,
        payload: [],
    });
};

export const editContacts = () => async (dispatch) => {
    return dispatch({
        type: actions.edit,
        payload: [],
    });
};

export const deleteContacts = () => async (dispatch) => {
    return dispatch({
        type: actions.delete,
        payload: [],
    });
};
*/
