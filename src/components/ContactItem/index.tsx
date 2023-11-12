import {IContact} from "../../type";
import {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {deleteContacts, selectContacts} from "../../store/actions/contactActions";
import Button from "../Button";

interface ContactItemProps {
    contact: IContact
}

function ContactItem({contact}: ContactItemProps) {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const onCheck = useCallback(() => {
        console.log(":ID", contact.id);
        dispatch(selectContacts(contact));
    }, [contact, dispatch]);

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
            <Link
                to={routes.currentContact(contact.id)}
                onClick={onCheck}
            >
                {contact.name}
            </Link>
            <Button
                variant="primary"
                icon="edit"
                className=""
                onClick={onEdit}
            >
                EDIT
            </Button>
            <Button
                variant="primary"
                icon="delete"
                className=""
                onClick={onDel}
            >
                DEL
            </Button>
        </div>
    )
}

export default ContactItem;
