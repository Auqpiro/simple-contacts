import * as actions from "../actions/index";
import {ContactsState, Actions} from "../../type";

const initialState: ContactsState = {
    contacts: []
};

export const contactsReducer = (state = initialState, { type, payload }: Actions): ContactsState => {
    switch (type) {
        case actions.CONTACTS_FETCH:
            return { ...state, contacts: [...state.contacts, ...payload] };
        // case actions.add:
        //     return state;
        // case actions.edit:
        //     return state;
        // case actions.delete:
        //     return state;
        default:
            return state;
    }
};
