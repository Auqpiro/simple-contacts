import {ThunkAction} from "redux-thunk";
import reducer from "./store/reducers";
import {Store} from "redux";

interface IContact {
    "id": number
    "name": string
    "phone": string
    "email": string
}

type ContactsState = {
    entity: IContact[]
    selected: null | IContact
}

type Reducer = typeof reducer

type State = ReturnType<Reducer>

type FetchAction = {
    type: "CONTACTS_FETCH"
    payload: IContact[]
}

type AddAction = {
    type: "CONTACTS_ADD"
    payload: IContact
}

type EditAction = {
    type: "CONTACTS_EDIT"
    payload: IContact
}

type DeleteAction = {
    type: "CONTACTS_DELETE"
    payload: number
}

type SelectAction = {
    type: "CONTACTS_SELECT"
    payload: IContact
}

type ThunkActions = FetchAction | AddAction | EditAction | DeleteAction;

type Thunk = ThunkAction<Promise<void>, State, unknown, ThunkActions>

type Storage = Store<State, ThunkActions | SelectAction> & { dispatch: Thunk }
