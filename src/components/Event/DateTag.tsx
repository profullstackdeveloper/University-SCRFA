interface PropTypes {
    month?: string;
    date?: string;
}

export default function DateTag({month, date}: PropTypes): JSX.Element {
    return (
        <div className="px-2 py-3 text-white bg-dark-yellow flex flex-col items-center justify-center h-fit font-sans select-none">
            <div className="uppercase text-xs">
                {
                    month
                }
            </div>
            <div className="text-3xl font-mono">
                {
                    date
                }
            </div>
        </div>
    )
}