import { MdArrowForward } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RingLoader from 'react-spinners/ClipLoader';
import { getCategoryData, catFilter } from '../redux/main-screen/item-list';
import Background from '../assets/makeup.png';

function formatString(str) {
  let item = str.replace('_', ' ');
  item = item.toUpperCase();
  return item;
}

export default function Home() {
  const initState = useSelector((state) => state.categoryReducer);
  const { category = {}, loading, error } = initState;
  const dispatch = useDispatch();
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [oldList, setOldList] = useState(category);

  function filterByCategory(e) {
    setSearchKeyWord(e.target.value);
  }

  useEffect(() => {
    if(category)
      dispatch(getCategoryData());
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <img src={Background} alt="make tool -z-10" className="w-1/4" />
        <div className="absolute top-30 w-1/2 sm:w-3/4">
          <h1 className="text-center text-white font-bold">Welcome to our makeup stock!!!</h1>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96 flex w-full">
              <div className="input-group relative flex items-stretch w-full mb-4">
                <input type="search" name="search" value={searchKeyWord} id="search-box" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none opacity-75" placeholder="Filter by category name" aria-label="Search" aria-describedby="button-addon2" onChange={filterByCategory} />
                <button className="btn inline-block px-6 py-2.5 bg-sky text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <RingLoader loading={loading} color="white" size={150} />
        { loading && <h1 className="text-white text-center">Computing categories items...</h1>}
      </div>
      <ul className="grid gap-x-0 gap-y-0 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-20">
        {
                    !loading && error && (
                    <h1 className="color-red">
                      Error ocurred:
                      {error}
                    </h1>
                    )
                }
        {
                    !loading && Object.entries(category).map(([key, value]) => (
                      key.includes(searchKeyWord) && (
                        <li key={`${key}${value}`} className="shadow-md sm:h-1/8 dark:bg-gray-800 dark:border-gray-700 p-5 cursor-pointer odd:bg-sky-500 even:bg-sky-700">
                          <NavLink to={`detail/${key}`} className="">
                            <div href="#" className="flex">
                              <img className="p-8 rounded-t-lg fill-white w-64 flex-1" src={require(`../assets/${key}.svg`)} alt={`catagory ${key}`} />  { /*eslint-disable-line */ }
                              <p className="text-white"><MdArrowForward /></p>
                            </div>
                            <div className="flex flex-col items-end  md:gap-5">
                              <h3 className="font-medium leading-8 text-white">{formatString(key)}</h3>
                              <p className="font-medium leading-8 text-white">{value}</p>
                            </div>
                          </NavLink>
                          <Outlet />
                        </li>
                      )
                    ))
                }
      </ul>
    </div>
  );
}
