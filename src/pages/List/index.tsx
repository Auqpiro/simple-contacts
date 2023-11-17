import './list.module.scss';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IContact, State} from "../../type";
import {useEffect, useMemo} from "react";
import {Dispatch} from "redux";
import {fetchContacts} from "../../store/actions/contactActions";
import ContactItem from "../../components/ContactItem";
import {useNavigate} from "react-router-dom";
import * as routes from "../../api/routes";
import Button from "../../components/Button";
import * as Grid from "../../components/Grid/index";
import styles from "./list.module.scss";
import { MdAddCircleOutline } from "react-icons/md";

function List() {
    const navigate = useNavigate();
    const contacts: IContact[] = useSelector((state: State) => state.contacts.entity, shallowEqual);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onAdd = () => {
        console.log("ADD");
        navigate(routes.add);
    };

    const contactsList = useMemo(() => contacts.length
            ? (contacts.map((contact) => (
                <Grid.Item sm={12} md={4} lg={2} key={contact.id}>
                    <ContactItem contact={contact}/>
                </Grid.Item>
            )))
            : (<p>Contacts not found</p>),
        [contacts]
    );

    return (
        <div className={styles.list}>
            <Button
                variant="primary"
                onClick={onAdd}
            >
                <MdAddCircleOutline/>
                ADD
            </Button>
            <Grid.Container spacing="md" alignItems="flex-start" justifyContent="flex-start">
                {contactsList}
            </Grid.Container>
        </div>
    )
}

export default List;
