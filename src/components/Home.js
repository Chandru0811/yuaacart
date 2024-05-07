import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftImage1 from "../assets/image_2024_04_09T09_17_20_806Z.png";
import rightImage1 from "../assets/image_2024_04_09T09_17_20_808Z.png";
import leftImage2 from "../assets/image_2024_04_09T09_17_20_809Z.png";
import rightImage2 from "../assets/image_2024_04_09T09_17_20_810Z.png";
import smartimg from "../assets/gitignore.png";
import advimage from "../assets/image_2024_05_06T13_08_11_079Z.png";
import { Link } from "react-router-dom";
import ProductList from "../pages/Products/ProductCarouselList";

const Home = () => {
  const sliderImageUrl = [
    {
      url: leftImage1,
    },
    {
      url: leftImage2,
    },
    {
      url: rightImage1,
    },
    {
      url: rightImage2,
    },
  ];

  const responsiveSettings = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2, 
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1, 
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1, 
      slidesToSlide: 1,
    },
  };

 return (
    <div className="container-fluid gx-0">
      <Carousel
        responsive={responsiveSettings}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px container-fluid"
      >
        {sliderImageUrl.map((images, index) => (
         <Link to="/productlist">
           <div className="">
            <div className="row" key={index}>
              <div className="col-12 ">
                <img
                  src={images.url}
                  alt={`left-${index}`}
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
         </Link>
        ))}
      </Carousel>
      <div className="my-5">
        <h4 className="p-3 fw-bold ">Sale Products</h4>
        <div className="">
          <ProductList />
        </div>
      </div>
      <div
        className="card container-fluid "
        style={{
          background:
            "linear-gradient(to right, rgb(158 199 229), rgb(20 177 255))",
        }}
      >
        <Link to={"/productlist"} style={{textDecoration:"none"}}>
        <div className=" container-fluid row">
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center text-center">
            <div className="">
              <h1 className=" text-primary fw-bold ">Smart, sleek,powerful</h1>
              <p className=" text-light">Elevate Your Productivity with Our Latest Laptops!</p>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <img src={smartimg} alt="" className="img-fluid" />
          </div>
        </div>
          </Link>
      </div>
      <div className="container-fluid my-5">
        <h4 className="p-3 fw-bold ">Top Rated Products</h4>
        <div className="">
          <ProductList />
        </div>
      </div>
      <div className="my-3">
        <Link to={"/productlist"}>
        <img src={advimage} alt="" className="img-fluid" />
        </Link>
      </div>
      {/* <div className="container-fluid">
        <div className="  row mt-3">
          <div className="col-md-6 col-12 my-1">
            <img src={leftImage1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 my-1">
            <img src={rightImage1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 my-1">
            <img src={leftImage2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 my-1">
            <img src={rightImage2} alt="" className="img-fluid" />
          </div>
        </div>
      </div> */}
      {/* <div className="col-12 mt-3" style={{ backgroundColor: "#a6cdb5" }}>
        <p className="p-3 fw-bold ">Contact Us</p>
      </div> */}
      
    </div>
  );
};

export default Home;
