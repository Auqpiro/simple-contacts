import {IContact, State} from "../../type";
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ContactDetails from "../../components/ContactDetails";
import NotFound from "../Notfound";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {deleteContacts} from "../../store/actions/contactActions";
import Button from "../../components/Button";

function Contact() {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const contact: IContact | null = useSelector((state: State) => state.contacts.selected, shallowEqual);
    if (!contact) return (<NotFound/>);

    const onBack = () => {
        console.log("BACK", contact.id);
        navigate("/");
    };

    const onEdit = () => {
        console.log("EDIT", contact.id);
        navigate(routes.edit(contact.id));
    };

    const onDel = () => {
        console.log("DELETE", contact.id);
        dispatch(deleteContacts(contact.id));
        navigate("/");
    };

    return (
        <div>
            <Button
                variant="primary"
                icon="back"
                className=""
                onClick={onBack}
            >
                BACK
            </Button>
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
            <ContactDetails contact={contact}/>
        </div>
    )
}

export default Contact;
