import {ReactNode} from "react";
import styles from "./status.module.scss";

interface StatusProps {
    children: ReactNode
}
function Status({children}: StatusProps) {
    return (
        <div className={styles.status}>
            {children}
        </div>
    )
}

export default Status;
