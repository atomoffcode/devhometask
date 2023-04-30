import React from 'react'
import '../../../assets/css/style.scss';
import '../components/ProductPage.scss';
import Background1 from '../../../assets/photos/Background (1).png';
import Image1 from '../../../assets/photos/Image.png';
import Image2 from '../../../assets/photos/Image2.png';
import Image3 from '../../../assets/photos/Image3.png';
import Image5 from '../../../assets/photos/Image5.png';
import Icon1231 from '../../../assets/photos/Icon1231.png';
import Photo from '../../../assets/photos/Photo.png';
import Photo5 from '../../../assets/photos/Photos5-pic.png';
import Images4back from '../../../assets/photos/Images4back.png';
import s7back from '../../../assets/photos/s7-back.png';
import s8img from '../../../assets/photos/s8-content-img.png';
var products = [
    {
        productId : 1,
        productTitle : "Vegetable",
        productImage : Photo,
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    },
    {
        productId : 2,
        productTitle : "Vegetable",
        productImage : Photo,
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    }
    ,
    {
        productId : 3,
        productTitle : "Vegetable",
        productImage : Photo,
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    },
    {
        productId : 4,
        productTitle : "Vegetable",
        productImage : Photo,
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    }
]






export const ProductPage = () => {
  return (
    <>
    <div className="section">
        <div className="shop-page text-center">
            <h1 className="text2">Shop</h1>
        </div>
    </div>

    <div className="section">
        <div className="shop-product-grid">
            <div className="s4-bottom product-grid">
                {products.map(item => (
                    <div className="product-cart">
                    <div className="protitle"><p>
                        {item.productTitle}
                    </p></div>
                    <div className="proimage">
                        <img src={item.productImage} alt=""/>
                    </div>
                    <div className="prodesc">
                        <div className="pd-top"><p>{item.productName}</p></div>
                        <div className="pd-bottom">
                            <div className="pdbl"><span><s>${item.productPrice}</s></span>${item.productDiscountPrice}</div>
                            <div className="pdbr">
                                <div className="pd-star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    </div>
    <div className="section">
        <div className="section-10">
            <div className="s10-inner">
                <div className="s10-left">
                    <h3>Subscribe to
                        our Newsletter
                        </h3>
                </div>
                <div className="s10-right">
                    <input type="email" className="subscribe-email" placeholder="Your Email Address"/>
                    <button type="button" className="subscribe-btn btn1" >Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
