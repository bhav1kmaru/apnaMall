import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import { DataArray } from './data'
import styles from '../../styles/format.module.css'
import Image from 'next/image'

var $ = require('jquery')
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
})

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = ({ DataArray }) => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    slideBy: 2,
    smartSpeed: 500,
    navClass: ['owl-prev', 'owl-next'],
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 4,
      },
      600: {
        items: 6,
      },
      700: {
        items: 8,
      },
      1000: {
        items: 10,
      },
    },
  }

  return (
    <div className="row no-gutters" style={{ backgroundColor: 'none' }}>
      <div
        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
        id="owl-carousel-products"
      >
        {/* <h3 className="text-center">
                    <span className="heading float-left w-100">Featured Products</span>
                </h3> */}
        <ul
          id="owl-carousel-ul"
          className="owl-carousel owl-loaded owl-drag"
          style={{ backgroundColor: 'none' }}
        >
          <OwlCarousel
            className="owl-theme"
            style={{ backgroundColor: 'none' }}
            loop
            margin={0}
            nav={true}
            navText={[
              '<img src="/images/Arrow_left.png" />',
              '<img src="/images/Arrow_right.png" />',
            ]}
            dots={false}
            animateIn={true}
            {...options}
          >
            {DataArray && DataArray.length > 0
              ? DataArray.map((product) => {
                  return (
                    <div
                      id="featuredProducts"
                      className="item float-left w-100"
                      key={'img' + Date.now() + Math.random().toString()}
                    >
                      <div className="productListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
                        {/* <a href={product.url}> */}
                        {/* <a className="product float-left"> */}
                        <span className="text-center">
                          {/* <img className={styles.small_slider_items}
                                                    id={"img" + Date.now()}
                                                    src={product.image}
                                                    alt={product.text}
                                                    // title={product.text}
                                                    // width={10}
                                                    // height={10}
                                                ></img> */}
                        </span>
                        <span className="w-100 text-center mt-1 ">
                          <h5 className="brand text-capitalize float-left">
                            {product.text}
                          </h5>
                          {/* <span className="name">{product.name}</span>
                                                <strong className="itemPrice p-0">
                                                    Price: {product.price}
                                                </strong> */}
                        </span>
                        {/* </a> */}
                        {/* </a> */}
                      </div>
                    </div>
                  )
                })
              : ''}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  )
}
export default Slider
