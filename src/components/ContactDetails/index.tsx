import {IContact} from "../../type";

interface ContactDetailsProps {
    contact: IContact
}

function ContactDetails({contact}: ContactDetailsProps) {
    return (
        <div>
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

export default ContactDetails;
