import {IContact, State} from "../../type";
import {useNavigate} from "react-router-dom";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ContactDetails from "../../components/ContactDetails";
import NotFound from "../Notfound";
import * as routes from "../../api/routes";
import {Dispatch} from "redux";
import {deleteContacts} from "../../store/actions/contactActions";
import Button from "../../components/Button";
import { IoChevronBack } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import ControlPanel from "../../components/ControlPanel";

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
        <>
            <ControlPanel>
                <Button
                    variant="primary"
                    onClick={onBack}
                >
                    <IoChevronBack/>
                    BACK
                </Button>
                <Button
                    variant="warning"
                    onClick={onEdit}
                >
                    <FaRegEdit/>
                    EDIT
                </Button>
                <Button
                    variant="danger"
                    onClick={onDel}
                >
                    <AiOutlineDelete/>
                    DEL
                </Button>
            </ControlPanel>
            <ContactDetails contact={contact}/>
        </>
    )
}

export default Contact;
