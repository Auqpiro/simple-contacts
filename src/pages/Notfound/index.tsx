import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";

function NotFound() {
    const navigate = useNavigate();
    const onBack = () => {
        console.log("BACK");
        navigate("/");
    };
    return (
        <>
            <Button
                variant="primary"
                onClick={onBack}
            >
                MAIN
            </Button>
            404
        </>
    )
}

export default NotFound;
