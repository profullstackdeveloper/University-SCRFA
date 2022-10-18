import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropTypes {
    content: string;
    disabled: boolean;
}

export default function SolidButtonIcon ({content, disabled=false}: PropTypes): JSX.Element {
    return (
        <button disabled={disabled} className="w-fit h-full p-4 border-[2px] border-solid border-ex-light-blue cursor-pointer select-none text-white uppercase bg-ex-light-blue flex items-center hover:bg-light-blue active:bg-dark-blue disabled:bg-black-c3 disabled:border-black-c3">
            <div className="mr-2">
                {
                    content
                }
            </div>
            <FontAwesomeIcon fontSize={20} icon={faSearch}></FontAwesomeIcon>
        </button>
    )
}