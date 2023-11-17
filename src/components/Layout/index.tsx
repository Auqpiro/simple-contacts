import {Link, Outlet} from "react-router-dom";
import styles from "./layout.module.scss";

function Layout() {
    return (
        <div className={styles.container}>
            <nav>
                <Link to="/" className={styles.logo}>
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
