import './list.module.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IContact, State} from "../../type";
import {useEffect} from "react";
import {Dispatch} from "redux";
import {fetchContacts} from "../../store/actions/contactActions";
import ContactItem from "../../components/ContactItem";
import {useNavigate} from "react-router-dom";
import * as routes from "../../api/routes";

function List() {
    const navigate = useNavigate();
    const contacts: IContact[] = useSelector((state: State) => state.contacts.entity, shallowEqual);
    const dispatch: Dispatch<any> = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const onAdd = () => {
        console.log("ADD");
        navigate(routes.add);
    };
    const contactsList = contacts.length
        ? (contacts.map((contact) => (<ContactItem key={contact.id} contact={contact}/>)))
        : (<p>Contacts not found</p>);
    return (
        <div>
            <button onClick={onAdd}>ADD</button>
            {contactsList}
        </div>
    )
}

export default List;
