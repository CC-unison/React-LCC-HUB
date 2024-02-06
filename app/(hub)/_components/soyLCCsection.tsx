'use client'
import { SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const soyLCCposts = [
    { image: 'https://source.unsplash.com/random?wallpapers', imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
    { image: "#", imageLabel: "nini", title: "Title", description: "desc", date: "hoy" },
];


export const SoyLCCsection = async () => {
    const posts = soyLCCposts;
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

            {posts.map((post, i) => (
                <SwiperSlide key={i}>
                    <SoyLCCcard post={post} key={post.title} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
