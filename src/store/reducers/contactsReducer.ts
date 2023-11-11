import * as actionTypes from "../actions/index";
import {ContactsState, SelectAction, ThunkActions} from "../../type";

const initialState: ContactsState = {
    entity: [],
    selected: null,
};

export const contactsReducer = (state = initialState, { type, payload }: ThunkActions | SelectAction): ContactsState => {
    switch (type) {
        case actionTypes.CONTACTS_FETCH:
            return { ...state, entity: payload };
        case actionTypes.CONTACTS_ADD:
            return { ...state, entity: [...state.entity, payload] };
        case actionTypes.CONTACTS_EDIT:
            const editEntity = state.entity.map((contact) => (
                contact.id === payload.id ? payload : contact
            ));
            return { ...state, entity: editEntity, selected: payload };
        case actionTypes.CONTACTS_DELETE:
            const filteredEntity = state.entity.filter((contact) => (
               contact.id !== payload
            ));
            return { ...state, entity: filteredEntity };
        case actionTypes.CONTACTS_SELECT:
            return {...state, selected: payload};
        default:
            return state;
    }
};
