import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'From 11.00am To 10.00pm'}
                heading={'Order Online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-[1320px] mb-24 mt-12"
            >
                <SwiperSlide>
                    <img className='w-full mb-12 ' src={slide1} alt="" />
                    <h3 className=" uppercase text-4xl font-cinzel text-white font-normal absolute bottom-24 left-24 ">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full mb-12' src={slide2} alt="" />
                    <h3 className="uppercase text-4xl font-cinzel text-white font-normal absolute bottom-24 left-24 ">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full mb-12' src={slide3} alt="" />
                    <h3 className="uppercase text-4xl font-cinzel text-white font-normal absolute bottom-24 left-24 ">Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full mb-12' src={slide4} alt="" />
                    <h3 className="uppercase text-4xl font-cinzel text-white font-normal absolute bottom-24 left-24 ">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full mb-12' src={slide5} alt="" />
                    <h3 className="uppercase text-4xl font-cinzel text-white font-normal absolute bottom-24 left-24 ">Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;