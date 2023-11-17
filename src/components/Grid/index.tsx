import cn from "classnames";
import {ReactNode} from "react";
import styles from "./grid.module.scss";

type Spacing = "sm" | "md" | "lg";
type JustifyContent = "flex-start" | "center" | "flex-end" | "space-between";
type AlignItems = "flex-start" | "center" | "flex-end";

interface GridContainerProps {
    children: ReactNode
    spacing?: Spacing
    justifyContent?: JustifyContent
    alignItems?: AlignItems
}

export function Container({spacing, justifyContent, alignItems, children, ...props}: GridContainerProps) {
    return (
        <div
            className={cn(styles.grid_container, {
                [styles[`grid_spacing_${spacing}`]]: spacing,
                [styles[`grid_justifyContent_${justifyContent}`]]: justifyContent,
                [styles[`grid_alignItems_${alignItems}`]]: alignItems,
            })}
            {...props}
        >
            {children}
        </div>
    )
}

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridItemProps {
    children: ReactNode
    sm?: Cols
    md?: Cols
    lg?: Cols
}

export function Item({sm, md, lg, children, ...props}: GridItemProps) {
    return (
        <div
            className={cn(styles.grid_item, {
                [styles[`grid_sm_${sm}`]]: sm,
                [styles[`grid_md_${md}`]]: md,
                [styles[`grid_lg_${lg}`]]: lg,
            })}
            {...props}
        >
            {children}
        </div>
    )
}