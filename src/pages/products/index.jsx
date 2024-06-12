import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import ProductCard from './product.jsx'; // ProductCard faylini import qilamiz

const Index = () => {
  const [posts, setPosts] = useState([]);
  // const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0); // Jami sahifalar soni

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setPosts(response.data);
        setTotalPages(response.data.pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  // const changePage = (type) => {
  //   if (type === 'prev') {
  //     setPage((prev) => Math.max(prev - 1, 1));
  //   } else {
  //     setPage((prev) => Math.min(prev + 1, totalPages));
  //   }
  // };

  // const handleLimitChange = (event) => {
  //   setLimit(parseInt(event.target.value));
  //   setPage(1);
  // };

  return (
    <div className='users'>
      <h1 className='text-center my-3'>Products</h1>
      <div className='row'>
        {posts.map((product, index) => (
          <div key={index} className='col-md-4'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {/* <section>
        <label htmlFor="limitSelect">Limit:</label>
        <select id="limitSelect" className="form-select" onChange={handleLimitChange} value={limit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </section> */}
      {/* <div className='pagination'>
        <button className='btn btn-primary' onClick={() => changePage('prev')} disabled={page === 1}>
          Prev
        </button>
        <h3 className='fs-4'>{page} / {totalPages}</h3>
        <button className='btn btn-primary' onClick={() => changePage('next')} disabled={page === totalPages}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Index;
