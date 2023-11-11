import {IContact, State} from "../../type";
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ContactDetails from "../../components/ContactDetails";
import NotFound from "../Notfound";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {deleteContacts} from "../../store/actions/contactActions";

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
            <button onClick={onBack}>BACK</button>
            <button onClick={onEdit}>EDIT</button>
            <button onClick={onDel}>DEL</button>
            <ContactDetails contact={contact}/>
        </div>
    )
}

export default Contact;
