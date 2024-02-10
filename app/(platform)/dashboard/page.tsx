import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <UserButton />
            <div>
                Protected
            </div>
            <div>
                Not logined
            </div>
        </div>
    );
}

export default DashboardPage;
