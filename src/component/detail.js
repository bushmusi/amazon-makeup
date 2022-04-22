import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate,useLocation  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByProductType } from '../redux/detail/item-detail';
import RingLoader from "react-spinners/ClipLoader";

function limitWords(string) {
  const desc = string !== null ? string.substring(0,50) : "No description..."
  return desc;
}
export default function Detail() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch()
  const initState = useSelector(state => state.productReducer)
  console.log(initState);
  const {products = [], loading, error} = initState.state;
  useEffect(()=>{
      dispatch(fetchByProductType(search))
  },[search])
    return (
      <>
      <div className="flex p-5 items-center">
        <span to="home" className='text-white flex-1 cursor-pointer' onClick={()=> navigate(-1)}><MdKeyboardBackspace size={30}/> </span>
        <h1 className="text-white">Category Lists</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
                <RingLoader loading={loading} color={`white`} size={150} />
                {loading && <h1 className='text-white text-center'>Getting products...</h1>}
      </div>
      <ul className="grid grid-cols-3 gap-5 justify-center my-8 p-10">
        {
          products.map(item => (
            <li className="rounded-lg border-4 border-sky p-3 grid grid-rows-2"  style={{ backgroundColor: '#00000040' }} key={item.id}>
              <div className="flex justify-center">
                <img src={`${item.image_link}`} alt={`Image of brand ${item.brand} named ${item.name}`} />
              </div>
              <div>
                <ul className="p-5">
                  <li className="text-white"><b className="text-gray-300">Brand:</b> {item.brand}</li>
                  <li className="text-white"><b className="text-gray-300">Name:</b> {item.name}</li>
                  <li className="text-white"><b className="text-gray-300">Description:</b> {limitWords(item.description)}...</li>
                </ul>
                <button type="button" className="w-full bg-white h-10 text-gray-500">Add To Cart {`$${item.price}`}</button>
              </div>
            </li>
          ))
        }
      </ul>
      </>
    )
}