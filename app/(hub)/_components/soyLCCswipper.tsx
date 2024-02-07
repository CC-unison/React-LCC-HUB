'use client'
import { SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const SoyLCCswipper = async (props) => {
    const { posts } = props;
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
            modules={[Pagination, Navigation]}
            navigation={true}
        >

            {posts.map((post, i) => (
                <SwiperSlide key={i}>
                    <SoyLCCcard post={post} key={post.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

