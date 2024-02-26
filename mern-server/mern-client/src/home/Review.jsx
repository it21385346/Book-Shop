import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// react icone

import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import proPic from "../assets/banner-book/img25.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className=' my-12 px-4 lg:px-24'>
        <h2 className='text-5x1 font-bold text-center mb-10 leading-sung'>Our Customer</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="MySilder"
      >
        <SwiperSlide>
            <div>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                {/*text*/}
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor delectus 
                        perspiciatis et doloribus. Molestias facere iure facilis quis perspiciatis esse totam 
                        voluptates veniam, reiciendis, amet veritatis nulla. Sint, cupiditate. Alias?</p>

                        <Avatar img="proPic" alt="avatar of Jese" rounded />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review