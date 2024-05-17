import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./Products";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export const TopProductCarouselList = () => {
  const { topProductlist } = useContext(ProductData);
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const prodectResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1224 },
      items: 6,
      slidesToSlide: 1,
    },
    lap: {
      breakpoint: { max: 1224, min: 1324 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 968 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet1: {
      breakpoint: { max: 968, min: 767 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 300 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile1: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={prodectResponsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        // deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {topProductlist &&
          topProductlist.map((product) => (
            <div key={product.id} className="product-item card h-100 mx-1">
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ height: "250px" }}
              >
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
                  <div
                    className="d-flex align-items-center justify-content-center image-container"
                    style={{ maxHeight: "100%", maxWidth: "93%" }}
                  >
                    <img
                      src={`https://sgitjobs.com/ShoppingCart/public/${product.images[0].path}`}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxHeight: "90%", maxWidth: "83% " }}
                    />
                  </div>
                </Link>
              </div>
              <Link
                to={`/discription/${product.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div class="card-body pt-0">
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
          ))}
      </Carousel>
    </div>
  );
};
