import {useParams} from "react-router-dom";
import ContactForm from "../../components/ContactForm";

function Edit() {
    let { id} = useParams();
    return (
        <>
            Edit {id} contact
            <ContactForm/>
        </>
    )
}

export default Edit;
