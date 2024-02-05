import { NavBar } from './_components/navbar'
import { Footer } from './_components/footer'

const HubLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default HubLayout;
