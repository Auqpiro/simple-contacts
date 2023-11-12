import ContactForm from "../../components/ContactForm";
import {IContact} from "../../type";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {addContacts} from "../../store/actions/contactActions";
import Button from "../../components/Button";

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
            <Button
                variant="primary"
                icon="back"
                className=""
                onClick={onBack}
            >
                BACK
            </Button>
            Add
            <ContactForm mode="add" onSubmit={onAdd}/>
        </>
    )
}

export default Add;
