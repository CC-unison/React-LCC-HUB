'use client'
import { Container } from "@mui/material";
import { SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



interface SoyLCCprops {
    posts: ReadonlyArray<{
        image: string;
        imageLabel: string;
        title: string;
        description: string;
        date: string;
    }>;
}

export const SoyLCCsection = (props: SoyLCCprops) => {
    const { posts } = props;
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            className="mySwiper"
            modules={[Pagination, Navigation]}
            navigation={true}
        >

            {posts.map((post) => (
                <SwiperSlide>
                    <SoyLCCcard post={post} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
