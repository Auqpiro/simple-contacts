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
import {MdAddCircleOutline} from "react-icons/md";
import ControlPanel from "../../components/ControlPanel";
import Status from "../../components/Status";

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
            : null,
        [contacts]
    );

    return (
        <>
            <ControlPanel>
                <Button
                    variant="primary"
                    onClick={onAdd}
                >
                    <MdAddCircleOutline/>
                    ADD
                </Button>
            </ControlPanel>
            <Status>
                {`Contact List have ${contacts.length} item(s)`}
            </Status>
            <Grid.Container spacing="md" alignItems="flex-start" justifyContent="flex-start">
                {contactsList}
            </Grid.Container>
        </>
    )
}

export default List;
