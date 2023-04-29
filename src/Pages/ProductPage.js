import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import useFetch from "../Components/useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(true);

  const handleGoBack = () => {
    navigate(-1);
  };

  const {
    data: products,
    isLoading,
    error,
  } = useFetch(
    `https://hakika-online-store-api.onrender.com/api/products/${id}`
  );

  return (
    <section className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <BiMenuAltRight />
      </div>
      {isLoading ? (
        <div className="rotatingIcon">
          <RotatingLines
            strokeColor="#f58634"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <img
            id="productImage"
            className="img-fluid"
            src={products.imageLink}
            alt="product"
          />
          <h2>{products.name}</h2>
          <p>
            Ksh {products.price}
            .00
          </p>
          <div className="descriptionSection">
            <div className="headings d-flex justify-content-between mt-5">
              <p
                className={showDescription ? "bottom" : ""}
                onClick={() => setShowDescription(true)}
              >
                Description
              </p>
              <p
                className={showDescription ? "" : "bottom"}
                onClick={() => setShowDescription(false)}
              >
                Reviews
              </p>
            </div>
            <div className="reviewsSection mt-1">
              {showDescription ? <p>{products.description}</p> : <p>Reviews</p>}
            </div>
          </div>
          <div className="buttonSection d-flex justify-content-between mt-5">
            <button
              className="btn w-40"
              style={{ border: "2px solid #f58634", color: "#f58634" }}
            >
              Add to Cart
            </button>
            <button className="btn themeColor text-white w-50">Call</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
