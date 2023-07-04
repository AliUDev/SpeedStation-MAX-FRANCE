import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Author from '../images/author.png';
import './Review.scss';


const Reviews = () => {
  return (
    <div className='reviews_slider'>
         <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper review_Swiper"

            >
            <SwiperSlide><div className='swiper_slide_overlay'>
                <div className='review_content_container'>
                    <div className='review_box'>
                        <FormatQuoteIcon className='svg_1'></FormatQuoteIcon>
                        <p>Don t stop when you are tired. Stop when you are done.</p>
                        <FormatQuoteIcon className='svg_2'></FormatQuoteIcon>
                    </div>
                    <div className='review_owner'>
                        <img src={Author}></img>
                        <p className='author_name'>Kabir Khan</p>
                        <p className='author_post'>Designer at Speditioncheck</p>

                    </div>
                </div>
                
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='swiper_slide_overlay'>
                <div className='review_content_container'>
                    <div className='review_box'>
                        <FormatQuoteIcon className='svg_1'></FormatQuoteIcon>
                        <p>Don t stop when you are tired. Stop when you are done.</p>
                        <FormatQuoteIcon className='svg_2'></FormatQuoteIcon>
                    </div>
                    <div className='review_owner'>
                        <img src={Author}></img>
                        <p className='author_name'>Kabir Khan</p>
                        <p className='author_post'>Designer at Speditioncheck</p>

                    </div>
                </div>
                
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='swiper_slide_overlay'>
                <div className='review_content_container'>
                    <div className='review_box'>
                        <FormatQuoteIcon className='svg_1'></FormatQuoteIcon>
                        <p>Don t stop when you are tired. Stop when you are done.</p>
                        <FormatQuoteIcon className='svg_2'></FormatQuoteIcon>
                    </div>
                    <div className='review_owner'>
                        <img src={Author}></img>
                        <p className='author_name'>Kabir Khan</p>
                        <p className='author_post'>Designer at Speditioncheck</p>

                    </div>
                </div>
                
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='swiper_slide_overlay'>
                <div className='review_content_container'>
                    <div className='review_box'>
                        <FormatQuoteIcon className='svg_1'></FormatQuoteIcon>
                        <p>Don t stop when you are tired. Stop when you are done.</p>
                        <FormatQuoteIcon className='svg_2'></FormatQuoteIcon>
                    </div>
                    <div className='review_owner'>
                        <img src={Author}></img>
                        <p className='author_name'>Kabir Khan</p>
                        <p className='author_post'>Designer at Speditioncheck</p>

                    </div>
                </div>
                
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='swiper_slide_overlay'>
                <div className='review_content_container'>
                    <div className='review_box'>
                        <FormatQuoteIcon className='svg_1'></FormatQuoteIcon>
                        <p>Don t stop when you are tired. Stop when you are done.</p>
                        <FormatQuoteIcon className='svg_2'></FormatQuoteIcon>
                    </div>
                    <div className='review_owner'>
                        <img src={Author}></img>
                        <p className='author_name'>Kabir Khan</p>
                        <p className='author_post'>Designer at Speditioncheck</p>

                    </div>
                </div>
                
                </div>
            </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Reviews