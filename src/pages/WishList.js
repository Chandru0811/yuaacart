import React, { useContext } from "react";
import { ProductData } from "./Products/Products";
import { FaTrash } from "react-icons/fa";

const WishList = () => {
  const { productList } = useContext(ProductData);

  return (
    <div className="container-fluid ">
      <div className=" mx-5">
        <h2 className=" fw-bold " style={{ color: "#0047a9" }}>
          Your List
        </h2>
      </div>
      <hr />

      <div className=" row d-flex  p-2 ">
        {productList.map((product) => (
          <div class="col-md-4 col-12  mb-3" key={product.id}>
            <div className="card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid mt-2"
                    style={{ maxHeight: "95%" }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body ">
                    <h5 className="">{product.name}</h5>
                    <s className="card-text">${product.actualPrice}</s>
                    <p className="card-text">
                      Sale Price: ${product.salePrice}
                    </p>
                    <div className="d-flex justify-content-end ">
                      <button type="button" className="btn btn-sm btn-primary">
                        Add Cart
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger mx-1"
                      >
                        <FaTrash />{" "}
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
