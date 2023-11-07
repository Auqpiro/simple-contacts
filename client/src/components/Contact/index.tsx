import {IContact} from "../../type";

interface ContactProps {
    contact: IContact
}

function Contact({contact}: ContactProps) {
    return (
        <div>
            Contact
            <div>
                {contact.name}
            </div>
            <div>
                {contact.email}
            </div>
            <div>
                {contact.phone}
            </div>
        </div>
    )
}

export default Contact;
