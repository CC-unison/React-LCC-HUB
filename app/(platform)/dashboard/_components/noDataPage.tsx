import { Container, Typography } from "@mui/material"

const NoDataPage = () => {
    return (
        <Container maxWidth={false} disableGutters sx={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
            <Typography variant="h4" color="black" textAlign="center">
                Al parecer no estas registrado en la base de datos!!!
            </Typography>
            <Typography variant="h5" color="blue" textAlign="center">
                Esto puede ser porque no has dado tu consentimiento, o porque no la hemos actualizado :^)
            </Typography>
        </Container>
    )
}

export default NoDataPage;
