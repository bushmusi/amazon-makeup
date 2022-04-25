import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RingLoader from 'react-spinners/ClipLoader';
import { fetchByProductType } from '../redux/detail/item-detail';

function limitWords(string) {
  const desc = string !== null ? string.substring(0, 50) : 'No description...';
  return desc;
}
export default function Detail() {
  const navigate = useNavigate();
  const { id: search } = useParams();
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.productReducer);
  const { products = [], loading, error } = initState.state;

  useEffect(() => {
    dispatch(fetchByProductType(search));
  }, []);
  return (
    <>
      <div className="flex p-5 items-center">
        <span to="home" className="text-white flex-1 cursor-pointer" onClick={() => navigate(-1)} aria-hidden="true">
          <MdKeyboardBackspace size={30} />
        </span>
        <h1 className="text-white">Category Lists</h1>
      </div>
      {loading && (
      <div className="flex flex-col justify-center items-center">
        <RingLoader loading={loading} color="white" size={150} />
        <h1 className="text-white text-center">Getting Specfic products...</h1>
      </div>
      )}
      {
        error && <span>{error}</span>
      }
      <ul className="flex flex-col justify-center my-8 mb-10">
        {
          products.map((item) => (
            <li className="p-3 flex odd:bg-sky-500 even:bg-sky-700" key={item.id}>
              <div className="flex justify-start">
                <img style={{ maxWidth: '242px' }} className="w-3/4 max:w-30" src={`${item.image_link}`} alt={`brand ${item.brand} named ${item.name}`} />
              </div>
              <div>
                <ul className="p-5">
                  <li className="text-white">
                    <b className="text-gray-300">Brand:</b>
                    {' '}
                    {item.brand}
                  </li>
                  <li className="text-white">
                    <b className="text-gray-300">Name:</b>
                    {' '}
                    {item.name}
                  </li>
                  <li className="text-white">
                    <b className="text-gray-300">Price:</b>
                    {' '}
                    {item.price}
                  </li>
                  <li className="text-white">
                    <b className="text-gray-300">Description:</b>
                    {' '}
                    {limitWords(item.description)}
                    ...
                  </li>
                </ul>

              </div>
            </li>
          ))
        }
      </ul>
    </>
  );
}
