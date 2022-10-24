import React from 'react';

interface TitlePropTypes {
    content?: string;
}

interface SubTitlePropTypes {
    content?: string;
}


export default function Logo(): JSX.Element {

    const [alpha, setAlpha] = React.useState<number>(1);
    const Title = ({ content }: TitlePropTypes): JSX.Element => {
        return (
            <div className='uppercase text-blue font-semibold md:text-lg !leading-5 text-xs font-Roboto-Slab'>
                {
                    content
                }
            </div>
        )
    }

    const SubTitle = ({ content }: SubTitlePropTypes): JSX.Element => {
        return (
            <div className='text-blue-gray italic md:block hidden font-Open-sans'>
                {
                    content
                }
            </div>
        )
    }
    return (
        <div className='flex items-center cursor-pointer' onMouseOver={() => setAlpha(0.4)} onMouseLeave={() => setAlpha(1)}>
            <img src='/assets/images/RFA Logo Final.png' className={`md:w-20 md:h-20 w-16 h-16 hover:opacity-40 opacity-${alpha}`} alt="Logo" />
            <div className='flex flex-col justify-start ml-2'>
                <Title content='south carolina'></Title>
                <Title content='revenue and fiscal affairs office'></Title>
                <SubTitle content='Transforming data into solutions for South Carolina'></SubTitle>
            </div>
        </div>
    )
}