import {useNavigate} from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import {IContact, State} from "../../type";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NotFound from "../Notfound";
import * as routes from "../../api/routes";
import {editContacts} from "../../store/actions/contactActions";
import {Dispatch} from "redux";
import Button from "../../components/Button";
import { IoChevronBack } from "react-icons/io5";
import ControlPanel from "../../components/ControlPanel";

function Edit() {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const contact: IContact | null = useSelector((state: State) => state.contacts.selected, shallowEqual);
    if (!contact) return (<NotFound/>);

    const onEdit = (formData: Omit<IContact, "id">) => {
        console.log("EDIT", {id: contact.id, ...formData});
        dispatch(editContacts(formData, contact.id));
        navigate(routes.currentContact(contact.id));
    };

    const onBack = () => {
        console.log("BACK", contact.id);
        navigate(-1);
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
            </ControlPanel>
            <div>
                Edit {contact.name}'s contact
            </div>
            <ContactForm mode="edit" onSubmit={onEdit} selected={contact}/>
        </>
    )
}

export default Edit;
