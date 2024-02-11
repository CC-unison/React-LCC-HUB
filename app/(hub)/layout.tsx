import { Header } from './_components/header'
import { Footer } from './_components/footer'
import { Container, CssBaseline } from '@mui/material';

const sections = [
    { title: "Dashboard", url: "dashboard" },
    { title: 'Soy LCC', url: '/' },
    { title: 'Noticias', url: '/' },
    { title: 'Galeria', url: '/' },
];

const HubLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth={false} disableGutters>
                <Header title="LCC Hub" sections={sections} />
                {children}
                <Footer />
            </Container>
        </>
    );
};

export default HubLayout;
