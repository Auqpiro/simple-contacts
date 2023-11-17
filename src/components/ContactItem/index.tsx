import {IContact} from "../../type";
import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {deleteContacts, selectContacts} from "../../store/actions/contactActions";
import Button from "../Button";
import styles from "./contactItem.module.scss";
import {FaRegEdit} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa";

interface ContactItemProps {
    contact: IContact
}

function ContactItem({contact}: ContactItemProps) {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const onCheck = useCallback((e: React.MouseEvent<HTMLElement>) => {
        console.log(":ID", contact.id);
        e.stopPropagation();
        navigate(routes.currentContact(contact.id));
        dispatch(selectContacts(contact));
    }, [contact, dispatch, navigate]);

    const onEdit = useCallback((e: React.MouseEvent<HTMLElement>) => {
        console.log("EDIT", contact.id)
        e.stopPropagation();
        dispatch(selectContacts(contact));
        navigate(routes.edit(contact.id));
    }, [contact, navigate, dispatch]);

    const onDel = useCallback((e: React.MouseEvent<HTMLElement>) => {
        console.log("DELETE", contact.id);
        e.stopPropagation();
        dispatch(deleteContacts(contact.id));
    }, [contact, dispatch]);

    return (
        <div
            className={styles.contact_item}
            onClick={onCheck}
        >
            <div className={styles.img}>
                <FaUserAlt/>
            </div>
            <div className={styles.name}>
                {contact.name}
            </div>
            <div className={styles.controls}>
                <Button
                    variant="warning"
                    onClick={onEdit}
                >
                    <FaRegEdit/>
                </Button>
                <Button
                    variant="danger"
                    onClick={onDel}
                >
                    <AiOutlineDelete/>
                </Button>
            </div>
        </div>
    )
}

export default ContactItem;
