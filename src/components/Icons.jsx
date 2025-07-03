

export const ArrowDown = () => {
    return (
        <svg className="w-10 h-10 md:w-12 md:h-12 fill-white">
            <path d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z"/>
        </svg>
            
    )
}


export const ArrowUp = () => {
    return (
        <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48"/>
            <path d="M13 30L25 18L37 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const PrevSlideArrow = () => {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    )
}

export const NextSlideArrow = () => {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    )
}

export const ZoomIcon = () => {
    return (
        <svg className="w-6 h-6 text-oscuro" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
        </svg>
    )
}

export const CloseIcon = () => {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}