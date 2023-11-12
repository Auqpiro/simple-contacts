import AddIcon from "./addIcon";
import EditIcon from "./editIcon";
import DeleteIcon from "./deleteIcon";
import BackIcon from "./backIcon";
import {IconRef} from "../../type";

interface SVGProps {
    icon: IconRef
    className: string
}

function SVG({icon, className}: SVGProps) {
    const svgIcon = {
        add: <AddIcon className={className}/>,
        edit: <EditIcon className={className}/>,
        delete: <DeleteIcon className={className}/>,
        back: <BackIcon className={className}/>,
        none: null,
    };
    return svgIcon[icon];
}

export default SVG;
