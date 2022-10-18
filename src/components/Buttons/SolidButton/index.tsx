interface PropTypes {
    disabled?: boolean;
    content: string;
}

export default function SolidButton ({content = "Solid Button", disabled=false}: PropTypes): JSX.Element {
    return (
        <button disabled={disabled} className="w-fit bg-ex-light-blue uppercase p-4 border-[2px] border-solid border-ex-light-blue cursor-pointer select-none text-white hover:bg-blue active:bg-dark-blue disabled:bg-black-c3 disabled:border-black-c3">
            {
                content
            }
        </button>
    )
}