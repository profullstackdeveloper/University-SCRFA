import React from 'react';
import { EventType } from '../../helpers/types';
import DateTag from './DateTag';
import EventBody from './EventBody';

interface PropTypes {
    event: EventType;
    bottomLine: boolean;
}

export default function Event ({event, bottomLine}: PropTypes): JSX.Element {
    return (
        <div className='w-full flex'>
            <DateTag date={String(event.date)} month={event.month}></DateTag>
            <EventBody event={event} bottomLine={bottomLine}></EventBody>
        </div>
    )
}