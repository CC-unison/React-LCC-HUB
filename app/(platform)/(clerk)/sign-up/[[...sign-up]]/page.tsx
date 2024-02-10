import { SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Alert from '@mui/material/Alert';

export default function Page() {
    return (
        <Box>
            <Alert severity="info" sx={{ mb: 1 }} >
                Asegurate de usar tu cuenta identidad unison.
            </Alert>
            <SignUp />
        </Box>
    );
}
