"use client";
import { LoadingSoyLCCcard, SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getSoyLCCvideos } from "@/lib/firestore";
import { useEffect, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

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
    <Container sx={{ pt: 10 }}>
      <Stack>
        <Typography variant="h3" fontWeight={700}>
          Conoce a nuestros egresados con SoyLCC
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={true}
          >
            {!posts
              ? Array(3)
                  .fill(true)
                  .map((_, i) => (
                    <SwiperSlide key={i}>
                      <LoadingSoyLCCcard />
                    </SwiperSlide>
                  ))
              : posts.map((post, i: number) => (
                  <SwiperSlide key={i}>
                    <SoyLCCcard post={post} key={post.title} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </Box>
      </Stack>
    </Container>
  );
};
