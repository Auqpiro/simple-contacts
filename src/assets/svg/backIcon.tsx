interface BackIconProps {
    className: string
}

function BackIcon({className = ""}: BackIconProps) {
    return (
        <>
            <svg className={className} width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" height="18"
                 viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                <g>
                    <path fill="#1D1D1B"
                          d="m45.539,63.41c0.394,0.394 0.908,0.59 1.424,0.59s1.031-0.197 1.424-0.59c0.787-0.787 0.787-2.061 0-2.848l-28.328-28.329 28.348-28.347c0.786-0.787 0.786-2.062 0-2.848-0.787-0.787-2.062-0.787-2.849,0l-29.736,29.735c-0.205,0.206-0.384,0.506-0.484,0.778-0.273,0.738-0.092,1.567 0.465,2.124l29.736,29.735z"/>
                </g>
            </svg>
        </>
    )
}

export default BackIcon;
