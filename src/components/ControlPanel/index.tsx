import {ReactNode} from "react";
import styles from "./controlPanel.module.scss";

interface ControlPanelProps {
    children: ReactNode
}

function ControlPanel({children}: ControlPanelProps) {
    return (
        <div className={styles.controls}>
            {children}
        </div>
    )
}

export default ControlPanel;
