import {Link, Outlet} from "react-router-dom";
function Layout() {
    return (
        <div>
            <Link to="/">
                CONTACT LIST
            </Link>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default Layout;
