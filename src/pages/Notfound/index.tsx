import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import ControlPanel from "../../components/ControlPanel";
import { GoHome } from "react-icons/go";
import styles from "./notfound.module.scss";

function NotFound() {
    const navigate = useNavigate();

    const onBack = () => {
        console.log("BACK");
        navigate("/");
    };

    return (
        <>
            <ControlPanel>
                <Button
                    variant="primary"
                    onClick={onBack}
                >
                    <GoHome/>
                    MAIN
                </Button>
            </ControlPanel>
            <div className={styles.container}>
                <div className={styles.status}>
                    404
                </div>
                <div className={styles.description}>
                    NOT FOUND
                </div>
            </div>
        </>
    )
}

export default NotFound;
