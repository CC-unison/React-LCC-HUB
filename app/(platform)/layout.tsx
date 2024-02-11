import { ClerkProvider } from '@clerk/nextjs';
import { esES } from '@clerk/localizations';
import { CssBaseline } from '@mui/material';

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
