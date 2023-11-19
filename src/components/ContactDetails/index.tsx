import {IContact} from "../../type";
import styles from "./contactDetails.module.scss";
import {FaUserLarge} from "react-icons/fa6";
import {LuPhone} from "react-icons/lu";
import {MdOutlineAlternateEmail} from "react-icons/md";

interface ContactDetailsProps {
    contact: IContact
}

function ContactDetails({contact}: ContactDetailsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.user_photo}>
                    <FaUserLarge/>
                </div>
                <div className={styles.user_details}>
                    <div className={styles.user_name}>
                        {contact.name}
                    </div>
                    <div className={styles.user_phone}>
                        <LuPhone/>
                        {contact.phone ?? "none"}
                    </div>
                    <div className={styles.user_email}>
                        <MdOutlineAlternateEmail/>
                        {contact.email ?? "none"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails;
