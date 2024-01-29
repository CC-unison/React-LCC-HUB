import AuthProvider from "./_components/AuthProvider";
import Footer from "./_components/footer";

const LandingPageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <AuthProvider>
                {/* Nav bar */}
                <main>
                    {children}
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
};

export default LandingPageLayout;



