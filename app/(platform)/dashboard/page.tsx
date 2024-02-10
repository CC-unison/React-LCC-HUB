import { auth, currentUser, UserButton } from "@clerk/nextjs";

const DashboardPage = async () => {
    const user = await currentUser();
    const email = user?.emailAddresses[0].emailAddress;
    const id = email?.split('@')[0].substring(1);

    return (
        <div>
            {id == "220212781" ? <div><UserButton />
                <div>
                    {id}
                </div>
            </div>
                :
                <div> Mosca </div>
            }
        </div>
    );

}

export default DashboardPage;
