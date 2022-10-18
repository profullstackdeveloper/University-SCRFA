import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Content(): JSX.Element {
    return (
        <div className='w-full h-80 flex items-center justify-center border-b-blue border-b-4 relative'>
            <img src='./assets/images/shutterstock_42474535.jpg' alt="back" className='w-full h-80' />
            <div className='sm:w-9/12 md:w-1/2  items-center absolute text-center text-black-F3 sm:text-xl lg:text-3xl font-Roboto-Slab'>
                Providing independent research, analysis, and resouces to facilitate informed policy decisions and administration of service
                <div className='flex flex-row mt-4 h-8 justify-center'>
                    <input placeholder='Search rfa.sc.gov' className='text-black placeholder:font-semibold placeholder:font-Open-sans-italic placeholder:text-sm  p-2 mr-1 w-fit text-lg focus:outline-none focus:border-light-blue' />
                    <button className='flex items-center  bg-light-blue hover:bg-blue active:bg-dark-blue text-white p-2  text-sm w-24 font-Open-sans'>
                        SEARCH
                        <FontAwesomeIcon icon={faSearch} className='ml-2 text-xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}