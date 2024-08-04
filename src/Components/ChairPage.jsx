import React, { useState } from "react";
import "./../Imgs/chair.png";
import "../Styling/first-page.css";
import AddRemoveBox from "./AddRemoveBox";
import MainChair from "./../Imgs/Main Chair.png";
import Rec2 from "./../Imgs/Rectangle 2.png";
import Rec4 from "./../Imgs/Rectangle 4.png";
import Rec5 from "./../Imgs/Rectangle 5.png";
import Rec6 from "./../Imgs/Rectangle 6.png";
import Rec7 from "./../Imgs/Rectangle 7.png";
function ChairPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Update the index to the next image, wrap around if at the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const handlePrev = () => {
    // Update the index to the next image, wrap around if at the end
    setCurrentIndex(
      (prevIndex) =>  (prevIndex - 1 + images.length) % images.length
    );;
  };

  const images = [
    { id: 2, src: Rec2, title: "Image 2" },
    { id: 4, src: Rec4, title: "Image 4" },
    { id: 5, src: Rec5, title: "Image 5" },
    { id: 6, src: Rec6, title: "Image 6" },
    { id: 7, src: Rec7, title: "Image 7" },
  ];


  return (
    <div className="main-chair">
      <div className="chair-left-side">
        <div className="chair-left-side-content">
          <h2 className="chair-left-side-title">Meryl Lounge Chair</h2>
          <div className="chair-price-rating">
            <div className="chair-price">
              <h4>$149.99</h4>
            </div>
            <div className="chair-rating">
              <p>⭐⭐⭐⭐⭐</p>
              <h5 className="rating-value">4.6/5.0</h5>
              <h5 className="total-rating-amount">(556)</h5>
            </div>
          </div>

          <div className="chair-description">
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </div>

          <div>
            <img src={require("./../Imgs/Color Selection.png")} alt="Chair" />
          </div>

          <div className="chair-btns">
            <AddRemoveBox />

            <button className="add-to-chart-btn">Add to Chart</button>
          </div>
          <div>
            <h5 className="footer-chair-description-text">
              Free 3-5 day shipping • Tool-free assembly • 30-day trial
            </h5>
          </div>
          <div className="footer-left-side">
            <div className="add-to-wishlist">
              <button className="add-to-wishlist-btn">
                <span>
                  <img src={require("./../Imgs/heart.png")} alt="Chair" />
                </span>
                <span className="add-to-wishlist-text">Add to Wishlist</span>
              </button>
            </div>
            <div className="contact-icons">
              <span className="contact-icon">
                <img src={require("./../Imgs/facebook.png")} alt="Chair" />
              </span>
              <span className="contact-icon">
                <img src={require("./../Imgs/twitter.png")} alt="Chair" />
              </span>
              <span className="contact-icon">
                <img src={require("./../Imgs/pinterest.png")} alt="Chair" />
              </span>
              <span className="contact-icon">
                <img src={require("./../Imgs/instagram.png")} alt="Chair" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="chair-right-side">
        <div className="chervon-panel">
          <div className="img-counter">
            <h1>0{currentIndex+1}</h1>
            <h2 className="imgs-slach">/</h2>
            <h2 className="imgs-num">0{images.length}</h2>
          </div>
          <div>
          <button className="chervon chervon-left"  onClick={handlePrev}><img src={require("./../Imgs/chevron-left.png")} /></button>
          <button className="chervon chervon-right" onClick={handleNext}><img src={require("./../Imgs/chevron-right.png")} /></button>
          </div>
        </div>
        <div className="main-chair-panel">
          <img
            className="main-chair-img"
            src={images[currentIndex].src}
            alt="Chair"
          />
        </div>
        <div className="right-side-footer">
          {images.map((img) => (
            <div key={img.id} className="right-side-footer-img">
              <img
                src={img.src}
                alt={img.title}
                className="right-side-footer-img-itself"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChairPage;

{
  /* <div className="right-side-footer-img">
            <img src={require("./../Imgs/Rectangle 2.png")} alt="Chair" className="right-side-footer-img-itself"/>
          </div>
          <div className="right-side-footer-img">
            <img src={require("./../Imgs/Rectangle 4.png")} alt="Chair" className="right-side-footer-img-itself" />
          </div>
          <div className="right-side-footer-img">
            <img src={require("./../Imgs/Rectangle 5.png")} alt="Chair" className="right-side-footer-img-itself" />
          </div>{" "}
          <div className="right-side-footer-img">
            <img src={require("./../Imgs/Rectangle 6.png")} alt="Chair" className="right-side-footer-img-itself"/>
          </div>
          
          
          <div className="right-side-footer-img">
          <img src={require("./../Imgs/langfjaell-office-chair-with-armrests-gunnared-beige-black__0461403_PE607530_S5 1.png")} alt="Chair" />
          </div>
          */
}
