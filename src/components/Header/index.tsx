import { Dispatch, SetStateAction } from 'react';
import { MenuButton } from '../Buttons';
import Logo from './Logo';
import SearchToggleMenu from './SearchToggleMenu';

interface PropTypes {
    clickMenuButton: Dispatch<SetStateAction<boolean>>;
    showMenu: boolean;
}

interface ButtonProps {
    css?: string;
    content?: string;
}

const Button = ({css, content}: ButtonProps): JSX.Element => {
    return (
        <div className={'uppercase select-none text-dark-blue cursor-pointer mr-8 lg:block hidden font-Open-sans ' + css}>
            {
                content
            }
        </div>
    )
}

export default function Header({ clickMenuButton, showMenu }: PropTypes): JSX.Element {
    const handleMenuButton = (): void => {
        clickMenuButton(!showMenu);
    }
    return (
        <div className={`w-full h-20 flex items-center justify-between md:h-24 ${showMenu ? 'border-b-blue-gray border-b-4' : 'border-b-blue border-b-4'}`}>
            <div className='flex items-center h-full'>
                <MenuButton opened={showMenu} onClick={handleMenuButton}></MenuButton>
                <div className='ml-8'></div>
                <Logo></Logo>
            </div>
            <div className='flex items-center h-full'>
                <Button css='hover:border-b-2' content='about us'></Button>
                <Button css='hover:border-b-2' content='events'></Button>
                <Button css='hover:border-b-2' content='boards & committees'></Button>
                <SearchToggleMenu></SearchToggleMenu>
            </div>
        </div>
    )
}