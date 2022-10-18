import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface PropTypes {
    opened: boolean;
    onClick: () => void;
}

export default function MenuButton({ opened = false, onClick }: PropTypes): JSX.Element {
    return (
        <button 
            className="w-fit p-1 bg-ex-light-blue cursor-pointer select-none text-white flex flex-col items-center justify-center text-[12px] h-full hover:bg-blue hover:text-white active:bg-dark-blue disabled:bg-black-c3 disabled:text-white md:p-4"
            onClick={() => onClick()}
        >
            <FontAwesomeIcon className="md:text-4xl text-xl" icon={opened === false ? faBars : faXmark}></FontAwesomeIcon>
            <div>{opened === true ? "CLOSE" : "MENU"}</div>
        </button>
    )
}