import {ThunkAction} from "redux-thunk";
import reducer from "./store/reducers";
import {Store} from "redux";

interface IContact {
    "id": number
    "name": string
    "phone": number
    "email": string
}

type ContactsState = {
    contacts: IContact[]
}

type Reducer = typeof reducer

type State = ReturnType<Reducer>

type FetchAction = {
    type: string
    payload: IContact[]
}

type Actions = FetchAction

type Thunk = ThunkAction<Promise<void>, State, unknown, Actions>

type Storage = Store<State, Actions> & { dispatch: Thunk }
