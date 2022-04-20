import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate,withRouter  } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByProductType } from '../redux/detail/item-detail';
const props = withRouter (props);
export default function Detail(props) {
  const navigate = useNavigate();
  const { id } = props.match.params;
  console.log(id);
  const dispatch = useDispatch()
  const initState = useSelector(state => state.productReducer)
  const {products, loading, error} = initState;
  // useEffect(()=>{
  //   if(products.length ===0 ){
  //     dispatch(fetchByProductType())
  //   }
  // },[])
    return (
      <>
      <div className="flex p-5 items-center">
        <span to="home" className='text-white flex-1 cursor-pointer' onClick={()=> navigate(-1)}><MdKeyboardBackspace size={30}/> </span>
        <h1 className="text-white">Category Lists</h1>
      </div>
      <ul className="grid grid-cols-3 gap-5 justify-center my-8 p-10">
        <li className="rounded-lg border-4 border-sky p-3"  style={{ backgroundColor: '#00000040' }}>
          <div className="flex justify-center">
            <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png"/>
          </div>
          <div>
            <ul className="p-5">
              <li className="text-white"><b className="text-gray-300">Brand:</b> covergirl</li>
              <li className="text-white"><b className="text-gray-300">Product Type:</b> lipstick</li>
              <li className="text-white"><b className="text-gray-300">Name:</b> CoverGirl Outlast Longwear Lipstick</li>
            </ul>
            <button type="button" className="w-full bg-white h-10 text-gray-500">Add To Cart $10.99</button>
          </div>
        </li>

        <li className="rounded-lg border-4 border-sky p-3"  style={{ backgroundColor: '#00000040' }}>
          <div className="flex justify-center">
            <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png"/>
          </div>
          <div>
            <ul className="p-5">
              <li className="text-white"><b className="text-gray-300">Brand:</b> covergirl</li>
              <li className="text-white"><b className="text-gray-300">Product Type:</b> lipstick</li>
              <li className="text-white"><b className="text-gray-300">Name:</b> CoverGirl Outlast Longwear Lipstick</li>
            </ul>
            <button type="button" className="w-full bg-white h-10">Add To Cart $10.99</button>
          </div>
        </li>

        <li className="rounded-lg border-4 border-sky p-3"  style={{ backgroundColor: '#00000040' }}>
          <div className="flex justify-center">
            <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png"/>
          </div>
          <div>
            <ul className="p-5">
              <li className="text-white"><b className="text-gray-300">Brand:</b> covergirl</li>
              <li className="text-white"><b className="text-gray-300">Product Type:</b> lipstick</li>
              <li className="text-white"><b className="text-gray-300">Name:</b> CoverGirl Outlast Longwear Lipstick</li>
            </ul>
            <button type="button" className="w-full bg-white h-10">Add To Cart $10.99</button>
          </div>
        </li>
        <li className="rounded-lg border-4 border-sky p-3"  style={{ backgroundColor: '#00000040' }}>
          <div className="flex justify-center">
            <img src="https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png"/>
          </div>
          <div>
            <ul className="p-5">
              <li className="text-white"><b className="text-gray-300">Brand:</b> covergirl</li>
              <li className="text-white"><b className="text-gray-300">Product Type:</b> lipstick</li>
              <li className="text-white"><b className="text-gray-300">Name:</b> CoverGirl Outlast Longwear Lipstick</li>
            </ul>
            <button type="button" className="w-full bg-white h-10">Add To Cart $10.99</button>
          </div>
        </li>
      </ul>
      </>
    )
}