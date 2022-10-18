import { Divider, List, ListItem, ListItemButton } from "@mui/material";
import {mainNavs, secondNavs} from '../../helpers/serviceData'

interface NavPropTypes {
    show: boolean;
}

interface SecNavPropTypes {
    title: string;
    items: string[];
}

const SecondNavCard = ({ title, items }: SecNavPropTypes): JSX.Element => {
    return (
        <div className="pl-10 py-10 sm:w-80 w-full flex-grow-0">
            <span className="text-left font-bold w-full text-dark-blue text-xl font-roboto-condensed">
                {
                    title
                }
            </span>
            <div className="w-12 bg-dark-yellow mb-10 pl-10 pt-1" />
            <List>
                {
                    items.map((item: string, index: number) => (
                        <div key={index}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <span className="text-left ">
                                        {
                                            item
                                        }
                                    </span>
                                </ListItemButton>
                            </ListItem>
                        </div>
                    ))
                }
            </List>
        </div>
    );
};

export default function Navigation({ show }: NavPropTypes): JSX.Element {
    return (
        show ? <div className="flex flex-col overflow-auto sm:overflow-hidden fixed z-10 bg-white">
            <div className="flex sm:flex-row flex-col w-screen sm:max-h-96 sm:overflow-hidden  h-auto">
                <div className="p-10 sm:w-96 flex-grow-0 bg-gray-1 w-full">
                    <nav aria-label="main mailbox folders">
                        <List>
                            {
                                mainNavs.map((item: string, index: number) => (
                                    <div key={index}>
                                        {
                                            index ? <Divider /> : ""
                                        }
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <span className="text-center font-bold w-full">
                                                    {
                                                        item
                                                    }
                                                </span>
                                            </ListItemButton>
                                        </ListItem>
                                    </div>
                                ))
                            }
                        </List>
                    </nav>
                </div>
                <div className="flex-auto flex w-full flex-wrap overflow-auto h-96">
                    {
                        secondNavs.map((item, index) => (
                            <SecondNavCard {...item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="pt-1 bg-blue"></div>
        </div>
        : <></>
    );
}
