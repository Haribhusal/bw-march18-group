import React from "react";
import Slider from "react-slick";
import products from './../products.json'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {products.map((p, id) => (
                <div key={id} className="">
                    <article className="flex justify-between items-center">
                        <div className="space-y-5">
                            <h3 className="text-3xl">
                                {p.title}
                            </h3>
                            <p className="text-xl md:w-72 text-gray-500">
                                {p.description}
                            </p>
                            <button>Buy Now</button>
                        </div>
                        <div className="right">
                            <img src={p.image} className="" alt="" />
                        </div>
                    </article>
                </div>
            ))}
        </Slider>
    );
}