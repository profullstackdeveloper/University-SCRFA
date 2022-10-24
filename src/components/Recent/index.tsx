import { SolidLineButton } from '../Buttons';
import Blog from '../Blog';
import { BlogType } from '../../helpers/types';

interface PropTypes {
    blogs: BlogType[];
}

export default function Recent({blogs}: PropTypes): JSX.Element {
    return (
        <div className='md:mx-14 mx-3'>
            <div className='w-fit text-dark-blue text-4xl font-bold md:text-5xl'>
                Recent Updates
            </div>
            <div className='w-16 border-b-4 border-dark-yellow mb-10'></div>
            {
                blogs && blogs.length > 0 && blogs.map((blog: BlogType, index: number) => {
                    return (
                        <Blog {...blog} key={index}></Blog>
                    )
                })
            }
            <div className='mt-10'></div>
            <SolidLineButton content='view all events'></SolidLineButton>
            <div className='mb-10'></div>
        </div>
    )
}