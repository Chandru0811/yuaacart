import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./Products";
import "../../styles/custom.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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
      <Productpage productList={currentPosts} />
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
    <div className="pagination d-flex justify-content-center align-items-center mt-2">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage ? "btn active" : "btn btn-outline-secondary"
            } mx-2  `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export const Productpage = ({ productList }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };
  return (
    <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 g-3">
      {productList.map((product) => (
        <Link to={`/discription/${product.id}`} style={{ textDecoration: "none" }}>
          <div class="col h-100">
            <div key={product.id} className="product-item card h-100 mx-1">
              <div
                className="d-flex align-items-center"
                style={{ height: "250px" }}
              >
                <div className="d-flex justify-content-end">
                  <button
                    className="btn border-0  px-1"
                    onClick={() => toggleLike(product.id)}
                  >
                    <span className="rounded-pill heart-rounded p-2 shadow">
                      {likedProducts.includes(product.id) ? (
                        <FaHeart style={{ color: "#fd0000e0" }} />
                      ) : (
                        <FaRegHeart style={{ color: "#8d8d8d" }} />
                      )}
                    </span>
                  </button>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center image-container"
                  style={{ maxHeight: "100%", maxWidth: "93%" }}
                >
                  <img
                    src={`https://sgitjobs.com/ShoppingCart/public/${product.images[0].path}`}
                    alt={product.name}
                    className="img-fluid image-section"
                  />
                </div>
              </div>
              <div class="card-body">
                <h5 className="">{`${(product.name).split(' ').slice(0, 7).join(' ')}...`}</h5>
                <s className="card-text">
                  ${parseFloat(product.list_price).toFixed(2)}
                </s>
                <p className="card-text">
                  Sale Price: ${parseFloat(product.sale_price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
