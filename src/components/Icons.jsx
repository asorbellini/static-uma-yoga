

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

export const InstagramIcon = () => {
    return (
        <svg viewBox="0 0 192 192" fill="none" className="w-8 h-8 hover:scale-110">
            <path stroke="#000000" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/>
            <circle cx="96" cy="96" r="30" stroke="#000000" strokeWidth="12"/>
            <circle cx="135" cy="57" r="9" fill="#000000"/>
        </svg>
    )
}

export const PlayIcon = () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
)

export const PauseIcon = () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 9h2v6h-2zM14 9h2v6h-2z" />
    </svg>
)