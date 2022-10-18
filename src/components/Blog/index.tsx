import { BlogType } from "../../helpers/types";

export default function Blog({ title, content, publishDate, status }: BlogType): JSX.Element {
    return (
        <div className='py-4 max-w-lg'>
            <a href='# '>
                <div className='text-ex-light-blue text-xl underline underline-offset-2 decoration-ex-light-blue mb-2'>
                    {
                        title
                    }
                </div>
            </a>
            <div className='text-black-6 text-lg max-w-lg'>
                {
                    content
                }
            </div>
            <div className='flex items-center'>
                <div className='text-lg text-black-75'>
                    {
                        `Published: ${publishDate}`
                    }
                </div>
                <div className='px-1 text-white rounded-sm bg-black-6 ml-2'>
                    {
                        status
                    }
                </div>
            </div>

        </div>
    )
}