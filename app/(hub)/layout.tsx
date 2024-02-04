import { NavBar } from './_components/navbar'

const HubLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default HubLayout;
