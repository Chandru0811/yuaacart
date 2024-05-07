import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "./Products";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductList = () => {
  const { productList } = useContext(ProductData);
  const prodectResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
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
        ssr={true} // Server-side rendering support
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {productList.map((product) => (
          <Link to="/discription" style={{ textDecoration: "none" }}>
            <div key={product.id} className="product-item card h-100 mx-1">
              <div
                className="d-flex justify-content-center align-items-center "
                style={{ height: "250px" }}
              >
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
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductList;
