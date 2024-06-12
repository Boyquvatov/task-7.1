// SingleProduct.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

const SingleProduct = () => {
  // const location = useLocation();
  // const product = location.state.product; // Ma'lumotlarni olish

  // return (
  //   <>
  //     <div className="card_wrapper d-flex">
  //       <h1 className='text-primary d-flex items-center justify-content-center'>SINGLE PRODUCT <LocalMallRoundedIcon className='text-info fs-1' /></h1>
  //       {product ? (
  //         <div className="card_s w-50 h-50 ps-5" key={product.id}>
  //           <div className="card-left">
  //             <img src={product.image} alt={product.title} className='w-100' />
  //           </div>
  //           <div className="card_right">
  //             <h2 className='fs-5'>{product.title}</h2>
  //             <p className='fs-8 text-secondary'>{product.description}</p>
  //             <p className='fs-6 text-primary'>Price: ${product.price}</p>
  //           </div>
  //         </div>
  //       ) : (
  //         <p>Product not found.</p>
  //       )}
  //     </div>
  //   </>
  // );
  const { id } = useParams();
  return (
    <>
      <h1>Singlecar id : {id}</h1>
    </>
  );
}

export default SingleProduct;
