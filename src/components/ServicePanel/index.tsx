import { CardType } from "../../helpers/types";
import { cards } from "../../helpers/serviceData";


const Card = ({ imgsrc, content }: CardType) => {
    return (
        <div className='h-60 bg-white p-10 flex flex-col items-center justify-center w-60 justify-self-center mb-3 cursor-pointer'>
            <img src={imgsrc} alt="back" className='w-24 h-40 select-none' />
            <div className='text-xl text-center font-Open-sans text-blue font-bold select-none'>{content}</div>
        </div>
    )
}

export default function ServicePanel(): JSX.Element {

    return (
        <div className='w-full h-fit grid sm:grid-cols-2 lg:grid-cols-4 place-content-around  bg-black-E1 gap-1 p-4'>
            {
                cards.map((card: CardType, index: number) => {
                    return (
                        <Card {...card} key={index} />
                    )
                })
            }
        </div>
    )
}