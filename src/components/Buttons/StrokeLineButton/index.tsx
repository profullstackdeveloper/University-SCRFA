import CSS from 'csstype'

interface PropTypes {
    disabled: boolean;
    content?: string;
    styles?: CSS.Properties;
}

export default function StrokeLineButton ({disabled=false, content='Stroke Button', styles}: PropTypes): JSX.Element {
    return (
        <button className='w-fit p-4 border-[2px] border-solid border-ex-light-blue cursor-pointer select-none text-ex-light-blue uppercase hover:bg-ex-light-blue hover:text-white active:bg-dark-blue active:border-dark-blue disabled:bg-black-c3 disabled:border-black-c3 disabled:text-white' disabled={disabled} style={styles}>
            {
                content
            }
        </button>
    )
}