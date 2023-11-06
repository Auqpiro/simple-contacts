import actions from "./index";
import axios from "axios";
import {routes} from "../../api/routes";

export const fetchContacts = () => async (dispatch) => {
    const { data } = await axios.get(routes.contacts);
    dispatch({
        type: actions.fetch,
        payload: data,
    });
};

export const addContacts = () => async (dispatch) => {

    dispatch({
        type: actions.add,
        payload: [],
    });
};

export const editContacts = () => async (dispatch) => {
    dispatch({
        type: actions.edit,
        payload: [],
    });
};

export const deleteContacts = () => async (dispatch) => {
    dispatch({
        type: actions.delete,
        payload: [],
    });
};
