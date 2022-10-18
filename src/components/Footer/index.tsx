import { Office } from "../../helpers/types"
import { info, offices } from "../../helpers/serviceData"

export default function Footer (): JSX.Element {

    return (
        <div className='w-full h-fit py-8 px-4 bg-dark-blue flex justify-around md:flex-row flex-col md:justify-around items-start'>
            <div className='pb-12'>
                <div className='text-white font-bold text-lg'>
                    South Caronlina
                </div>
                <div className='text-white font-bold text-lg'>
                    Revenue and Fiscal Affairs Office
                </div>
                <img src='assets/images/Group 262.png' className='w-24 h-24 mt-10' alt='logo'></img>
            </div>
            <div className='pb-12'>
                {
                    info.map((information: string, index: number) => {
                        return (
                            <div className='text-black-cc text-base' key={index}>
                                {
                                    information
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col justify-between h-full'>
                {
                    offices.map((office: Office, index: number) => {
                        return (
                            <div className='max-w-sm mb-2' key={index}>
                                <div className='uppercase text-black-cc font-bold text-base'>
                                    {
                                        office.type
                                    }
                                </div>
                                <div className='text-black-E1 text-sm'>
                                    {
                                        office.street
                                    }
                                </div>
                                <div className='text-black-E1 text-sm'>
                                    {
                                        office.city
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}