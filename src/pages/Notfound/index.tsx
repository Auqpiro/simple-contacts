import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import ControlPanel from "../../components/ControlPanel";
import { GoHome } from "react-icons/go";

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
            <div>
                404 NOT FOUND
            </div>
        </>
    )
}

export default NotFound;
