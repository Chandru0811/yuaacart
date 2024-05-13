import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import ProductList from "../pages/Products/ProductCarouselList";
import axios from "axios";
import { TopProductCarouselList } from "../pages/Products/TopProductCarouselList";


  const Home = () => {
    const [sliderImageUrl, setSliderImageUrl] = useState([]);
    const [topbanner, setTopBanner] = useState([]);
    const [bottombanner, setBottomBanner] = useState([]);
    // const [bannerImageUrl, setBannerImageUrl] = useState([]);
    // console.log("slider",sliderImageUrl);
  
    const getProductData = async () => {
      try {
        const response = await axios.get(
          "https://sgitjobs.com/ShoppingCart/public/api/topSliders"
        );
        // console.log("response",response.data.data.sliders);
        setSliderImageUrl(response.data.data.sliders);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const getProductData1 = async () => {
      try {
        const response = await axios.get(
          "https://sgitjobs.com/ShoppingCart/public/api/bottomSliders"
        );
        console.log("response", response.data.data.sliders);
        setSliderImageUrl(response.data.data.sliders);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const getProductDatas = async () => {
      try {
        const response = await axios.get(
          "https://sgitjobs.com/ShoppingCart/public/api/topBanner"
        );
        setTopBanner(response.data.data.$banner);
        console.log("response",topbanner.path);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const getProductDatas1 = async () => {
      try {
        const response = await axios.get(
          "https://sgitjobs.com/ShoppingCart/public/api/bottomBanner"
        );
        setBottomBanner(response.data.data.$banner);
        console.log("response",bottombanner.path);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
  
    useEffect(() => {
      getProductData();
      getProductData1();
      getProductDatas();
      getProductDatas1();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  // const sliderImageUrl = [
  //   {
  //     url: leftImage1,
  //   },
  //   {
  //     url: leftImage2,
  //   },
  //   {
  //     url: rightImage1,
  //   },
  //   {
  //     url: rightImage2,
  //   },
  // ];

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
      {/* <Carousel
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
      </Carousel> */}
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
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px container-fluid"
      >
        {sliderImageUrl && sliderImageUrl.map((images, index) => (
          <Link to="/productlist">
            <div className="">
              <div className="row" key={index}>
                <div className="col-12 ">
                  <img
                    src={`https://sgitjobs.com/ShoppingCart/public/${images.path}`}
                    alt={`left-${index}`}
                    className="img-fluid mb-3"
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
      <div className="">
        <img
          src={`https://sgitjobs.com/ShoppingCart/public/${topbanner.path}`}
          alt="Test"
          className="img-fluid"
        />
      </div>
      <div className="container-fluid my-5">
        <h4 className="p-3 fw-bold ">Top Rated Products</h4>
        <div className="">
          <TopProductCarouselList />
        </div>
      </div>
      <div className="my-3">
      <Link to={"/productlist"} style={{textDecoration:"none"}}>
        <div className=" container-fluid row">
         
          <div className="col-12 d-flex justify-content-center align-items-center">
            <img src={`https://sgitjobs.com/ShoppingCart/public/${bottombanner.path}` } alt="" className="img-fluid" />
          </div>
        </div>
          </Link>
      </div>

      <div className="container-fluid">
        <Link to="/productlist">
          <div className="  row mt-3">
            {sliderImageUrl && sliderImageUrl.map((images, index) => (
              <div className="col-md-6 col-12 my-1">
                <img src={`https://sgitjobs.com/ShoppingCart/public/${images.path}`} alt="1" className="img-fluid" />
              </div>
            )
            )}
          </div>
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
