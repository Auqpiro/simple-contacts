import {ComponentPropsWithRef} from "react";
import {ButtonRef} from "../../type";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    variant: ButtonRef
}

function Button({variant, children, ...props}: ButtonProps) {
    return (
        <button
            className={cn(styles.button, {
                [styles[`button_${variant}`]]: variant,
            })}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;
