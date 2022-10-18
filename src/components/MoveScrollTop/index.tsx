import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

interface PropTypes {
    show: boolean;
}

export default function MoveScrollTop({ show }: PropTypes): JSX.Element {

    const [animation, setAnimation] = React.useState<boolean>(false);

    const handleClick = (): void => {
        setAnimation(true);
    }

    React.useEffect(() => {
        const bodyElement: HTMLElement | null = (document as Document).getElementById('body')
        if (bodyElement) {
            const dist = bodyElement.scrollTop / 20;

            if (animation) {
                const myInterval = setInterval(() => {

                    if (bodyElement.scrollTop >= 0) {
                        bodyElement.scrollTop = bodyElement.scrollTop - dist;
                        if (bodyElement.scrollTop === 0) {
                            clearInterval(myInterval);
                            setAnimation(false);
                        }
                    }
                }, 10);
            }
        }
    }, [animation])




    return (
        show ? <div className='flex items-center fixed right-8 bottom-6 cursor-pointer' onClick={() => handleClick()}>
            <div className='text-black-6 mr-3 select-none'>Back to Top</div>
            <div className='flex items-center justify-center rounded-full w-12 h-12 bg-light-sky'>
                <FontAwesomeIcon icon={faArrowUp} className="text-dark-blue"></FontAwesomeIcon>
            </div>
        </div>
        : <></>
    )
}