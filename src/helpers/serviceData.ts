import { BlogType, CardType, EventType, NavigationItem, Office, Service } from "./types";

const services: Service[] = [
    {
        serviceName: 'Overview and history of the South Carolina State Budget',
        link: '#'
    },
    {
        serviceName: 'Overview and history of the South Carolina State Budget',
        link: '#'
    },
    {
        serviceName: 'Overview and history of the South Carolina State Budget',
        link: '#'
    },
    {
        serviceName: 'Employer Contribution Trends',
        link: '#'
    },
    {
        serviceName: 'Employer Contribution Trends - June 4, 2019',
        link: '#'
    },
    {
        serviceName: 'Employer Contribution Trends - June 4, 2019',
        link: '#'
    },
    {
        serviceName: 'Appropriation Bills and Acts',
        link: '#'
    },
    {
        serviceName: 'Executive Budget Office State Agency Budget Plans(Requests)',
        link: '#'
    },
    {
        serviceName: 'Executive Budget Office State Agency Budget Plans(Requests)',
        link: '#'
    },
];

const getEvents = (): EventType[] => {
    return [
        {
            month: 'nov',
            date: 22,
            location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
            time: '1:30 pm',
            meetingTitle: 'Board of Economic Advisors Meeting',
            status: 'Updated',
            contactNumber: '(803) 734-2265'
        },
        {
            month: 'nov',
            date: 23,
            location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
            time: '1:30 pm',
            meetingTitle: 'Board of Economic Advisors Meeting',
            status: 'Canceled',
            contactNumber: '(803) 734-2265'
        },
        {
            month: 'nov',
            date: 25,
            location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
            time: '1:30 pm',
            meetingTitle: 'Board of Economic Advisors Meeting',
            contactNumber: '(803) 734-2265'
        },
        {
            month: 'nov',
            date: 28,
            location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
            time: '1:30 pm',
            meetingTitle: 'Board of Economic Advisors Meeting',
            contactNumber: '(803) 734-2265'
        }
    ]
}

const getBlogs = (): BlogType[] => {
    return [
        {
            title: 'Local Government Finance',
            content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
            publishDate: 'Jan 2, 2020',
            status: 'Updated'
        },
        {
            title: 'Transportation Network Carrier Maps',
            content: '',
            publishDate: 'Jan 2, 2020',
            status: 'New'
        },
        {
            title: 'BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23',
            content: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nectortor urna. Ut laoreet sodales',
            publishDate: 'Jan 2, 2020',
            status: 'Updated'
        },
        {
            title: 'Budget Development',
            content: '',
            publishDate: 'Dec 16, 2019',
            status: 'New'
        },
        {
            title: 'November 2019 General Fund Revenue Digest',
            content: '',
            publishDate: 'Dec 13, 2019',
            status: 'New'
        }
    ]
}

const cards: CardType[] = [
    {
        imgsrc: './assets/images/Data-Research-Icon.svg',
        content: 'DATA & RESEARCH'
    },
    {
        imgsrc: './assets/images/Geography-Icon.svg',
        content: 'GEOGRAPHY & MAPPING'
    },
    {
        imgsrc: './assets/images/Programs-Icon.svg',
        content: 'PROGRAMS & SERVICES'
    },
    {
        imgsrc: './assets/images/Legislative-Icon.svg',
        content: 'DALEGISLATIVE FISCAL IMPACTS'
    }
];

const mainNavs: string[] = [
    "Home",
    "News & Events",
    "About Us",
    "Contact Us",
    "Boards & Committees",
];

const secondNavs: NavigationItem[] = [
    {
        title: "DATA & RESEARCH",
        items: [
            "Economy",
            "State Finances",
            "Education",
            "Healthcare",
            "Local Government",
            "Population and Demographics",
        ],
    },
    {
        title: "DATA & RESEARCH",
        items: ["Economy", "State Finances", "Education", "Healthcare"],
    },
    {
        title: "DATA & RESEARCH",
        items: [
            "Economy",
            "State Finances",
            "Education",
            "Healthcare",
            "Local Government",
            "Population and Demographics",
        ],
    },
    {
        title: "DATA & RESEARCH",
        items: [
            "Economy",
            "State Finances",
            "Education",
            "Healthcare",
            "Local Government",
            "Population and Demographics",
        ],
    },
];

const info: string[] = [
    'Privacy Statement',
    'FOIA',
    'Disclosures and Reporting',
    'Report Fraud',
    'Accessibility',
    'Contact Us'
]

const offices: Office[] = [
    {
        type: 'main office',
        street: '1000 Assembly St, Rembert Dennis Building, Suite 421',
        city: 'Columbia, SC 29201'
    },
    {
        type: 'geodetic survey section',
        street: '5 Geology Rd',
        city: 'Columbia, SC 29212'
    },
    {
        type: 'health and demographics division',
        street: '1000 Assembly St, Rembert Dennis Building, Suite 240',
        city: 'Columbia, SC 29201'
    }
]

export {
    services,
    getEvents,
    getBlogs,
    cards,
    mainNavs,
    secondNavs,
    info,
    offices
}