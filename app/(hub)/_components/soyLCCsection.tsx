"use client";
import { LoadingSoyLCCcard, SoyLCCcard } from "./soyLCCcard";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getSoyLCCvideos } from "@/lib/firestore";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Stack,
  Skeleton,
} from "@mui/material";

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
    <Container sx={{ py: 5 }}>
      <Stack>
        <Typography variant="h3" fontWeight={700}>
          Soy LCC
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
              : posts.map((post, i) => (
                  <SwiperSlide key={i}>
                    <SoyLCCcard post={post} key={post.title} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </Box>
      </Stack>
      {/* <Container sx={{ mt: 50 }}> */}
      {/*   <Container maxWidth="md"> */}
      {/*     <Typography variant="h2" sx={{ mb: 2 }}> */}
      {/*       Soy LCC */}
      {/*     </Typography> */}
      {/*   </Container> */}
      {/*   <Box className="container second" sx={{ display: "flex" }}> */}
      {/*   </Box> */}
      {/* </Container> */}
    </Container>
  );
};
