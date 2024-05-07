import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./Products";
import "../../styles/custom.css"
const ProductList = () => {
  const { productList } = useContext(ProductData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  

  const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = productList.slice(firstPostIndex, lastPostIndex);
 
  return (
    <div className="container-fluid my-4 ">
        <h3 className="fw-bold p-2">Products</h3>
      <Productpage  productList={currentPosts}/>
      <Productpagination 
      totalPosts={productList.length}
      postsPerPage={postsPerPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
    </div>
  );
};
export default ProductList;

export const Productpagination = ({
  totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
  let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <div className='pagination d-flex justify-content-center align-items-center mt-2'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={ `${page === currentPage ? "btn active" : "btn btn-outline-secondary"} mx-2  `}>
                        {page}
                    </button>
                );
            })}
        </div>
  )
}

export const Productpage = ({productList}) => {
  return (
    <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 g-3">
      {productList.map((product) => (
        <Link to="/discription" style={{ textDecoration: "none" }}>
          <div class="col h-100">
          <div key={product.id} className="product-item card h-100 mx-1">
          <div className="d-flex justify-content-center align-items-center "
                style={{ height: "250px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{maxHeight: "95%"}}
                />
              </div>
            <div class="card-body">
              <h5 className="">{product.name}</h5>
              <s className="card-text">${product.actualPrice}</s>
              <p className="card-text">Sale Price: ${product.salePrice}</p>
            </div>
          </div>
          </div>
        </Link>
      ))}
      </div>
  )
}





