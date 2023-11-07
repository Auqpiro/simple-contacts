import {Outlet} from "react-router-dom";
import Message from "../Message";

function Layout() {
    return (
        <div>
            CONTACTS
            <Message/>
            <Outlet/>
        </div>
    )
}

export default Layout;
