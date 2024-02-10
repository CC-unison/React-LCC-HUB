import { ClerkProvider } from '@clerk/nextjs';
import { Container } from '@mui/material';
import { esES } from '@clerk/localizations';

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode,
}) => {
    return (
        <ClerkProvider localization={esES}>
            {children}
        </ClerkProvider>
    );
}

export default PlatformLayout;
