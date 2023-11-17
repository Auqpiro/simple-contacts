import {Link, Outlet} from "react-router-dom";
import "./layout.module.scss";

function Layout() {
    return (
        <div className="container">
            <nav>
                <Link to="/">
                    CONTACT LIST
                </Link>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;
