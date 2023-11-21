import * as routes from "../../api/routes";
import * as actionTypes from "./index";
import {IContact, SelectAction, Thunk} from "../../type";
import api from "../../api";

export const fetchContacts = (): Thunk => async (dispatch) => {
    const {data} = await api.get(routes.contacts);
    console.log("FETCH", data);
    dispatch({
        type: actionTypes.CONTACTS_FETCH,
        payload: data,
    });
};

export const addContacts = (newContact: Omit<IContact, "id">): Thunk => async (dispatch) => {
    const {data} = await api.post(routes.contacts, newContact);
    console.log("ADD", data);
    dispatch({
        type: actionTypes.CONTACTS_ADD,
        payload: data,
    });
};

export const editContacts = (newData: Omit<IContact, "id">, id: number): Thunk => async (dispatch) => {
    const {data} = await api.put(routes.currentContact(id), newData);
    console.log("EDIT", data);
    dispatch({
        type: actionTypes.CONTACTS_EDIT,
        payload: data,
    });
};

export const deleteContacts = (id: number): Thunk => async (dispatch) => {
    await api.delete(routes.currentContact(id));
    console.log("DELETE", id);
    dispatch({
        type: actionTypes.CONTACTS_DELETE,
        payload: id,
    });
};

export const selectContacts = (contact: IContact): SelectAction => {
    return {
        type: actionTypes.CONTACTS_SELECT,
        payload: contact,
    }
}
