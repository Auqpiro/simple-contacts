import ContactForm from "../../components/ContactForm";
import {IContact} from "../../type";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {addContacts} from "../../store/actions/contactActions";
import Button from "../../components/Button";
import { IoChevronBack } from "react-icons/io5";
import ControlPanel from "../../components/ControlPanel";
import Status from "../../components/Status";

function Add() {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const onAdd = (formData: Omit<IContact, "id">) => {
        console.log("ADD", formData);
        dispatch(addContacts(formData));
        navigate("/");
    };

    const onBack = () => {
        console.log("BACK");
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
            <Status>
                Adding new contact
            </Status>
            <ContactForm mode="add" onSubmit={onAdd}/>
        </>
    )
}

export default Add;
