import { EventType } from '../../helpers/types';
import { SolidLineButton } from '../Buttons';
import Event from '../Event';

interface PropTypes {
    events: EventType[];
}

export default function Calendar({ events }: PropTypes) {
    return (
        <div className='md:mx-14 mx-3'>
            <div className='w-fit text-dark-blue text-4xl font-bold md:text-5xl'>
                Calendar of Events
            </div>
            <div className='w-16 border-b-4 border-dark-yellow mb-10'></div>
            {
                events && events.length > 0 && events.length > 0 && events.map((event: EventType, index: number) => {
                    return (
                        <Event event={event} bottomLine={index < events.length - 1} key={index}></Event>
                    )
                })
            }
            <div className='mt-6'></div>
            <SolidLineButton content='view all events'></SolidLineButton>
            <div className='mb-32'></div>
        </div>
    )
}