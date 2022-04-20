
import {MdArrowForward} from 'react-icons/md';
import { NavLink, Outlet  } from 'react-router-dom';

const catagory = ['blush','bronzer','eyebrow','eyeliner','foundation','lip_liner','lipstick','nail_polish']

export default function Home() {
    return (
        <div className="p-5">
            <div className='flex justify-center p-5'>
                <form className='w-1/3'>
                    <input type="text" placeholder="Search by catagory type" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" name="search"/>
                </form>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 mb-20 ">
                {
                    catagory.map((item,index) => (
                        <li style={{ backgroundColor: '#00000040' }}  key={`${item}${index}`} className="max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 cursor-pointer">
                            <NavLink to={`detail?product_type=${item}`} className="">
                                <div href="#" className="flex">
                                    <img className="p-8 rounded-t-lg color-white w-64 flex-1" src={require(`../assets/${item}.svg`)} alt="product image" />
                                    <p className='text-white'><MdArrowForward /></p>
                                </div>
                                <h3 className='text-center font-medium leading-8 text-white'>{item}</h3>
                            </NavLink>
                            <Outlet />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}