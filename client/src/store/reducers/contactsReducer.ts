import actions from "../actions";

const initialState = [];

export const contactsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.fetch:
            return state;
        case actions.add:
            return state;
        case actions.edit:
            return state;
        case actions.delete:
            return state;
        default:
            return state;
    }
};
