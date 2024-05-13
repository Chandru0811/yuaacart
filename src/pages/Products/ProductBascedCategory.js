import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../config/URL";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function ProductBascedCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  console.log(products);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };
  // console.log("Products", product);
  const getAllProductsByCategories = async () => {
    try {
      const response = await api.get(`getProducts/${slug}`);
      // console.log("items", response.data);
      setProducts(response.data.data.products);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getAllProductsByCategories();
  }, [slug]);

  return (
    <div className="container">
      <h3 className="mb-4">{slug}</h3>
      <div className="row">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col-md-3 col-12 mb-3">
              <div className="card h-100">
                <div className="d-flex justify-content-end">
                  <button
                    className="btn border-0  px-1"
                    onClick={() => toggleLike(product.id)}
                  >
                    <span className="rounded-pill heart-rounded shadow">
                      {likedProducts.includes(product.id) ? (
                        <FaHeart style={{ color: "#fd0000e0" }} />
                      ) : (
                        <FaRegHeart style={{ color: "#8d8d8d" }} />
                      )}
                    </span>
                  </button>
                </div>
                <Link
                  to={`/discription/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="image-container">
                    <img
                      src={`https://sgitjobs.com/ShoppingCart/public/${product.images[0].path}`}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                </Link>
                <Link
                  to={`/discription/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="card-body">
                    <h5 className="">{`${product.name
                      .split(" ")
                      .slice(0, 7)
                      .join(" ")}...`}</h5>

                    <s className="card-text">
                      ${parseFloat(product.list_price).toFixed(2)}
                    </s>
                    <p className="card-text">
                      Sale Price: ${parseFloat(product.sale_price).toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductBascedCategory;
