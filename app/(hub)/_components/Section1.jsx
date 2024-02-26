import { Box } from "@mui/material";
import Image from "next/image";
import MainBg from "../../../public/main-bg-0_1.webp";

export const Section1 = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <Image
          src="/main-bg-0_1.webp"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
        />
      </Box>
    </Box>
  );
};
