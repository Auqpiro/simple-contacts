import {ComponentPropsWithRef} from "react";
import {ButtonRef, IconRef} from "../../type";
import SVG from "../../assets/svg";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    variant: ButtonRef
    icon: IconRef
    className: string
}

function Button({variant, icon, className, onClick, children, ...props}: ButtonProps) {
    return (
        <button className={variant} onClick={onClick} {...props}>
            <SVG icon={icon} className={className}/>
            {children}
        </button>
    )
}

export default Button;
