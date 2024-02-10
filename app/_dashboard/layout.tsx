import AuthProvider from "../(landingPage)/_components/AuthProvider";

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <AuthProvider>
                {children}
            </AuthProvider>
        </div>
    );
};

export default DashboardLayout;
