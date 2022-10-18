export interface Office {
    type: string;
    street: string;
    city: string;
}

export interface Service {
    serviceName: string;
    link: string;
}

export type NavigationItem = {
    title: string;
    items: string[];
}

export type CardType = {
    imgsrc: string;
    content: string;
}

export type EventType = {
    month: string;
    date: number;
    location: string;
    time: string;
    meetingTitle: string;
    status?: string;
    contactNumber: string;
}

export type BlogType = {
    title: string;
    content: string;
    publishDate: string;
    status: string;
}