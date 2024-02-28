"use client";
import { SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getSoyLCCvideos } from "@/lib/firestore";
import { useEffect, useState } from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

export const SoyLCCsection = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const prepareData = async () => {
      let posts = await getSoyLCCvideos();
      setPosts(posts);
    };
    prepareData();
  }, []);

  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 2 }}>
          Soy LCC
        </Typography>
      </Container>
      <Divider />
      <Box className="container second" sx={{ display: "flex" }}>
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
          {posts &&
            posts.map((post, i) => (
              <SwiperSlide key={i}>
                <SoyLCCcard post={post} key={post.title} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Container>
  );
};
