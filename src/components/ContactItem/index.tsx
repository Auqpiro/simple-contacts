import {IContact} from "../../type";
import {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {deleteContacts, selectContacts} from "../../store/actions/contactActions";

interface ContactItemProps {
    contact: IContact
}

function ContactItem({contact}: ContactItemProps) {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();
    const onEdit = useCallback(() => {
        console.log("EDIT", contact.id)
        dispatch(selectContacts(contact));
        navigate(routes.edit(contact.id));
    }, [contact, navigate, dispatch]);
    const onDel = useCallback(() => {
        console.log("DELETE", contact.id);
        dispatch(deleteContacts(contact.id));
    }, [contact, dispatch]);
    return (
        <div>
            <Link to={routes.currentContact(contact.id)} onClick={() => {
                dispatch(selectContacts(contact));
            }}>
                {contact.name}
            </Link>
            <button onClick={onEdit}>EDIT</button>
            <button onClick={onDel}>DEL</button>
        </div>
    )
}

export default ContactItem;
