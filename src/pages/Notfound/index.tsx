import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const onBack = () => {
        console.log("BACK");
        navigate("/");
    };
    return (
        <>
            <button onClick={onBack}>MAIN</button>
            404
        </>
    )
}

export default NotFound;
