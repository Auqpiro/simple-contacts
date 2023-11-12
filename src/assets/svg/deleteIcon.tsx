interface DeleteIconProps {
    className: string
}

function DeleteIcon({className = ""}: DeleteIconProps) {
    return (
        <>
            <svg className={className} width="18" version="1.1" xmlns="http://www.w3.org/2000/svg" height="18"
                 viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                <g>
                    <g fill="#1D1D1B">
                        <path
                            d="m11.13,63.764h41.786c1.184,0 2.14-0.958 2.14-2.141v-38.568h0.965c1.183,0 2.14-0.958 2.14-2.141v-10.985c0-1.182-0.957-2.141-2.14-2.141h-13.052v-5.357c0-1.182-0.957-2.141-2.14-2.141h-17.603c-1.184,0-2.142,0.958-2.142,2.141v5.357h-13.058c-1.185,0-2.142,0.958-2.142,2.141v10.985c0,1.183 0.957,2.141 2.142,2.141h0.963v38.568c1.77636e-15,1.182 0.958,2.141 2.141,2.141zm14.235-59.192h13.323v2.588h-13.323v-2.588zm25.41,54.91h-37.504v-36.427h37.505v36.427zm-40.61-47.413h43.713v6.704h-0.963-41.786-0.964v-6.704z"/>
                        <rect width="2.676" x="20.098" y="27.548" height="27.441"/>
                        <rect width="2.676" x="30.414" y="27.548" height="27.441"/>
                        <rect width="2.675" x="40.723" y="27.548" height="27.441"/>
                    </g>
                </g>
            </svg>
        </>

    )
}

export default DeleteIcon;
