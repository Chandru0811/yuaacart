import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import api from "../config/URL";
import { toast } from "react-toastify";
import ProductList from "./Products/ProductList";
import Drift from "drift-zoom";

export default function Description() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`product/view/${id}`);
       if(response.status === 200){ const productData = response.data.data.product;
        setData(productData);
        console.log("datas",response.data.data.product)
        setMainImage(`https://sgitjobs.com/ShoppingCart/public/${productData.images[0]?.path}`); 
        setImages(productData.images);}
      } catch (error) {
        toast.error("Error Fetching Data: " + error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (imagePath) => {
    setMainImage(imagePath);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };
 

  return (
    <div className="container-fluid">
      <div className="container mt-4">
        <h3>{data.name}</h3>
        <div className="row m-5">
          <div className="col-md-6 col-12">
            <div  style={{ width: "100%", height: "500px", overflow: "hidden" }}>
          <ZoomImage imageUrl={mainImage}  />
          </div>
     

            <div className="d-flex pt-3 gap-2"  style={{ width: "50px", height: "auto" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={`https://sgitjobs.com/ShoppingCart/public/${image.path}`}
                  alt={`Product ${index + 1}`}
                  className="img-fluid"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleChange(`https://sgitjobs.com/ShoppingCart/public/${image.path}`)}  />
              ))}
            </div>
          </div>
          <div className="col-md-6 col-12">
            <h4>{data.name}</h4>
            <p>
              <s>₹{formatPrice(data.list_price)}</s> ₹{formatPrice(data.sale_price)}
            </p>
            <h6>{data.description}</h6>
            <input
              type="number"
              className="form-control w-25"
              min="1"
              pattern="\d+"
              defaultValue="1"
            />
            <div className="d-flex gap-3 pt-3">
              <Link to="/cart">
                <button className="btn" style={{ backgroundColor: "rgb(0 107 255)", color: "white" }}>
                  Add To Cart
                </button>
              </Link>
              <Link to="/checkout">
                <button className="btn" style={{ backgroundColor: "#18b5fc", color: "white" }}>
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
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
        <ProductList />
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
