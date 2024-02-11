import { ClerkProvider } from '@clerk/nextjs';
import { esES } from '@clerk/localizations';

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode,
}) => {
    return (
        <ClerkProvider
            localization={esES}
            afterSignInUrl='/dashboard'
            afterSignUpUrl='/dashboard'
        >
            {children}
        </ClerkProvider>
    );
}

export default PlatformLayout;
