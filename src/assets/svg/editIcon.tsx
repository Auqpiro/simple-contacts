interface EditIconProps {
    className: string
}

function EditIcon({className = ""}: EditIconProps) {
    return (
        <>
            <svg className={className} width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" height="18"
                 viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                <g>
                    <g fill="#1D1D1B">
                        <path
                            d="m62.463,1.543c-1.017-1.017-2.403-1.542-3.83-1.543-1.43,0.021-2.778,0.591-3.801,1.609l-2.446,2.443c-0.01,0.012-0.015,0.025-0.024,0.035l-31.909,31.819c-0.104,0.104-0.158,0.233-0.234,0.353-0.131,0.152-0.245,0.317-0.327,0.505l-3.254,7.5c-0.324,0.75-0.169,1.62 0.397,2.211 0.392,0.41 0.927,0.631 1.476,0.631 0.241,0 0.486-0.043 0.719-0.131l7.824-2.943c0.217-0.081 0.406-0.209 0.579-0.352 0.126-0.08 0.262-0.14 0.367-0.245l32.035-31.945c0.006-0.006 0.008-0.014 0.015-0.02l2.341-2.33c2.118-2.111 2.15-5.52 0.072-7.597zm-35.905,37.576l-1.777-1.773 29.151-29.069 1.776,1.773-29.15,29.069zm32.95-32.857l-.916,.912-1.784-1.779 .911-.91c0.265-0.264 0.609-0.411 0.972-0.416 0.344-0.008 0.653,0.119 0.883,0.348 0.491,0.49 0.459,1.319-0.066,1.845z"/>
                        <path
                            d="M58.454,22.253c-1.128,0-2.04,0.911-2.04,2.034v33.611c0,1.121-0.915,2.033-2.04,2.033H6.12    c-1.126,0-2.04-0.912-2.04-2.033V9.787c0-1.121,0.914-2.034,2.04-2.034h33.403c1.127,0,2.04-0.911,2.04-2.034    s-0.913-2.034-2.04-2.034H6.12C2.745,3.685,0,6.422,0,9.787v48.111C0,61.263,2.745,64,6.12,64h48.254    c3.374,0,6.12-2.737,6.12-6.102V24.287C60.494,23.164,59.581,22.253,58.454,22.253z"/>
                    </g>
                </g>
            </svg>

        </>
    )
}

export default EditIcon;
