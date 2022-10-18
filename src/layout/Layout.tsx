import React, { Dispatch, SetStateAction } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

interface PropTypes {
    handler: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode
}

export default function Layout(props: PropTypes): JSX.Element {

    const [showNavigation, setShowNavigation] = React.useState(false);

    const ref = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if(ref && ref.current && ref.current.scrollTop > 100) {
            props.handler(true);
        } else {
            props.handler(false);
        }
    }

    return (
        <div className='flex flex-col w-full h-screen' onScrollCapture={() => handleScroll() }>
            <div className='flex-grow-0'>
                <Header clickMenuButton={setShowNavigation} showMenu={showNavigation}></Header>
                <Navigation show={showNavigation}></Navigation>
            </div>
            <div ref={ref} className='flex flex-col flex-grow h-screen overflow-auto w-full items-center' id="body">
                {
                    props.children
                }
            </div>
        </div>
    )
}