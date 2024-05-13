import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import api from "../config/URL";
import { toast } from "react-toastify";
import Drift from "drift-zoom";
import ProductCarouselList from "./Products/ProductCarouselList";

export default function Description({ onRemountHeader, isLoggedIn }) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`product/view/${id}`);
        if (response.status === 200) {
          const productData = response.data.data.product;
          setData(productData);
          console.log("datas", data);
          setMainImage(
            `https://sgitjobs.com/ShoppingCart/public/${productData.images[0]?.path}`
          );
          setImages(productData.images);
        }
      } catch (error) {
        toast.error("Error Fetching Data: " + error.message);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (imagePath) => {
    setMainImage(imagePath);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const addCart = async () => {
    const formData = new FormData();
    formData.append("quantity", quantity);
    formData.append("sale_price", data.sale_price);
    formData.append("shipTo", 1);
    formData.append("shippingZoneId", 1);
    formData.append("handling", 1);

    try {
      const response = await api.post(`addtocart/${data.slug}`, formData);
      console.log(response.data);
      if (response.status === 200) {
        toast.success(response.data.message);
        onRemountHeader();
      }
    } catch (error) {
      // console.log(error?.response?.status);
      if (error?.response?.status === 409) {
        // alert("Item already in cart");
        toast.warning(error?.response?.data?.message);
      } else {
        console.log("Error : ", error);
      }
    }
  };

  return (
    <div className="container-fluid">
      <div className="container mt-4">
        <h3>{data.name}</h3>
        <div className="row m-5">
          <div className="col-md-6 col-12">
            <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
              <ZoomImage imageUrl={mainImage} />
            </div>

            <div
              className="d-flex pt-3 gap-2"
              style={{ width: "50px", height: "auto" }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={`https://sgitjobs.com/ShoppingCart/public/${image.path}`}
                  alt={`Product ${index + 1}`}
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleChange(
                      `https://sgitjobs.com/ShoppingCart/public/${image.path}`
                    )
                  }
                />
              ))}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h4>{data.name}</h4>
            <p>
              <s>₹{formatPrice(data.list_price)}</s> ₹
              {formatPrice(data.sale_price)}
            </p>
            <h6>{data.description}</h6>
            <input
              type="number"
              className="form-control w-25"
              min="1"
              pattern="\d+"
              defaultValue="1"
              value={quantity} // Binding input value to the state variable
              onChange={(e) => setQuantity(e.target.value)} // Handling input change
            />
            <div className="d-flex gap-3 pt-3">
              <button
                className="btn"
                onClick={addCart}
                style={{ backgroundColor: "rgb(0 107 255)", color: "white" }}
              >
                Add To Cart
              </button>
              {isLoggedIn ? (
                <Link to="/checkout">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#18b5fc", color: "white" }}
                  >
                    Buy Now
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    className="btn"
                    style={{ backgroundColor: "#18b5fc", color: "white" }}
                  >
                    Buy Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Description">
            <h6>{data.description}</h6>
          </Tab>
          <Tab eventKey="profile" title="Reviews">
            <p>There are no reviews yet.</p>
          </Tab>
        </Tabs>
      </div>
      <div className="px-1 py-4">
        <h3>Related products</h3>
        <ProductCarouselList />
      </div>
    </div>
  );
}

const ZoomImage = ({ imageUrl }) => {
  const imgRef = useRef();
  const paneRef = useRef();
  const inlineContainerRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      const drift = new Drift(imgRef.current, {
        paneContainer: paneRef.current,
        inlineContainer: inlineContainerRef.current,
      });
      return () => drift.destroy();
    }
  }, [imageUrl]);
  return (
    <div className="zoom-image">
      <img
        ref={imgRef}
        src={imageUrl}
        data-zoom={imageUrl}
        alt="Zoom here :)"
        className="img-fluid"
        style={{ maxHeight: "95%" }}
      />
      <div ref={inlineContainerRef} style={{ width: "50px", height: "50px" }} />
      <div ref={paneRef} style={{ width: "50px", height: "50px" }} />
    </div>
  );
};
