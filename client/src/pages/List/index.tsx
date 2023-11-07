import './list.module.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IContact, State} from "../../type";
import {useEffect} from "react";
import {Dispatch} from "redux";
import {fetchContacts} from "../../store/actions/contactActions";
import Contact from "../../components/Contact";

function List() {
    const contacts: IContact[] = useSelector((state: State) => state.contacts.contacts, shallowEqual);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, []);
    const contactsList = contacts.length && contacts.map(contact => (
       <Contact contact={contact} key={contact.id}/>
    ));
    return (
        <div>
            List
            {contactsList}
        </div>
    )
}

export default List;
