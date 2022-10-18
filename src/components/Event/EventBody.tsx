import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faIdBadge, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { EventType } from '../../helpers/types';

interface EventBodyPropTypes {
    event: EventType;
    bottomLine: boolean;
}

interface DetailedInfoPropTypes {
    info: string;
    icon: IconDefinition
}

const DetailedInfo = ({ info, icon }: DetailedInfoPropTypes): JSX.Element => {
    return (
        <div className='flex my-1'>
            <div className='flex w-6 h-7 items-center justify-center'>
                <FontAwesomeIcon icon={icon} className='text-dark-yellow' fontSize={16}></FontAwesomeIcon>
            </div>
            <div className=' text-lg text-black-3 max-w-sm'>
                {
                    info
                }
            </div>
        </div>
    )
}

export default function EventBody({ event, bottomLine }: EventBodyPropTypes): JSX.Element {
    return (
        <div className='ml-4'>
            {
                event.status && <div className={`rounded-sm select-none text-xs p-1 w-fit ${event.status === 'Updated' ? 'bg-light-yellow text-black-3' : 'bg-red text-white'}`}>
                    { event.status }
                </div>
            }
            <div className=' text-xl font-medium text-black-3'>
                {
                    event.meetingTitle
                }
            </div>
            <DetailedInfo info={event.location} icon={faLocationDot}></DetailedInfo>
            <DetailedInfo info={event.time} icon={faClock}></DetailedInfo>
            <DetailedInfo info={event.contactNumber} icon={faIdBadge}></DetailedInfo>
            {
                bottomLine && <div className='w-full border-b border-blue-gray my-5'></div>
            }
        </div>
    )
}