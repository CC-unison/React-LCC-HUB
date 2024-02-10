import { Box } from "@mui/material";
import rectoria from "../../../public/rectoria.jpg"

const LayoutAuth = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{
                backgroundImage: `url(${rectoria})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: '#112e5c'
            }}
        >
            {children}
        </Box>
    );
}

export default LayoutAuth;
